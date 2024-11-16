import axios from "axios";
import React, { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import AuthButton from "../Constants/AuthButton";
import Input from "../Constants/Input";
import { useLoginMutation } from "../Redux/features/AuthSlice";
import { useTranslation } from "react-i18next";
const Signin = () => {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorr, setError] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  const [login, { isLoading }] = useLoginMutation();

  const validationFunc = (e: any) => {
    e.preventDefault();
    if (email.trim() === "") {
      setError("Email Are required");
      setIsEmpty("email");
      return;
    }
    if (password.trim() === "") {
      setError("Password Are required");
      setIsEmpty("password");
      return;
    }
    AuthLogin();
  };

  const AuthLogin = async () => {
    try {
      const credentials: any = {
        email,
        password,
      };
      const response = await login(credentials).unwrap();
      if (response.message === "2FA code sent. Please verify the code.") {
        navigate("/2fa");
        return;
      }

      if (response.message) {
        console.log(response);
        if (response.user.isVerfied == true) {
          signIn({
            auth: {
              token: response.token,
              type: "Bearer",
            },
            userState: response.user,
          });

          if (response.user.role === "buyer") {
            navigate("/products");
          } else if (response.user.role === "vendor") {
            navigate("/user");
          } else if (response.user.role === "admin") {
            navigate("/admin");
          }
        } else {
          setError("Please verify your email");
          setIsEmpty("email");
        }
      }
    } catch (error: any) {
      if (
        error.data &&
        error.data.message === "Invalid credentials. Try again"
      ) {
        setError("Invalid credentials. Try again");
        setErr(true);
      }
      if (error.data && error.data.message === "User not found") {
        setError("Invalid credentials. Try again");
        setErr(true);
      } else {
        setError("Invalid credentials, Try again");
        setErr(false);
      }
    }
  };

  const loginWithGoogle = () => {
    const googleAuthUrl = `${process.env.GOOGLE_AUTH_URL}`;
    window.location.href = googleAuthUrl;
  };
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center ">
      <div className="flex flex-col gap-[8px] items-center w-full md:w-[60%] lg:w-[40%]  p-2">
        <a href="/"></a>
        <div className="flex flex-col gap-[2px] items-center">
          <span className="font-[600] text-[28px] text-[#333333] font-outfit">
            {t("Sign In")}
          </span>
          <span className="text-[20px] font-[300] text-[#A3A2A2] font-outfit">
            {" "}
            {t("Enter your credentials")}
          </span>
        </div>
        <span className="text-red-500 text-[14px] font-outfit">{errorr}</span>

        <form
          onSubmit={(e: any) => validationFunc(e)}
          className="flex flex-col gap-[10px] w-full"
          method="post"
        >
          <Input
            error={isEmpty === "email" ? true : !!(false || err)}
            label={t("Enter Your Email")}
            type="email"
            placeholder={t("Enter your email address")}
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <Input
            label={t("Enter Your Password")}
            type="password"
            placeholder={t("Enter Your Password")}
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <a
            href="/forgot-password"
            className="text-[16px] font-[600] text-primary text-end"
          >
            {t("Forgot Password")}?
          </a>
          <AuthButton isLoading={!!isLoading} label={t("Sign In")} />

          <div
            onClick={loginWithGoogle}
            className=" cursor-pointer p-2 border gap-[10px] text-white rounded-[12px]  flex flex-row items-center justify-center"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_600_1595)">
                <path
                  d="M10.4508 1.48667C7.45335 2.52652 4.86834 4.50018 3.07548 7.11777C1.28262 9.73535 0.376419 12.8589 0.489976 16.0296C0.603533 19.2002 1.73087 22.2509 3.70639 24.7335C5.68191 27.2162 8.40148 28.9999 11.4657 29.8226C13.9499 30.4636 16.5526 30.4918 19.05 29.9046C21.3125 29.3964 23.4042 28.3094 25.1203 26.7499C26.9065 25.0773 28.2029 22.9495 28.8703 20.5953C29.5958 18.0351 29.7249 15.3428 29.2477 12.7249H15.2977V18.5117H23.3766C23.2151 19.4346 22.8691 20.3155 22.3593 21.1016C21.8495 21.8877 21.1863 22.5628 20.4094 23.0867C19.4229 23.7392 18.3108 24.1783 17.1446 24.3757C15.9749 24.5932 14.7752 24.5932 13.6055 24.3757C12.42 24.1306 11.2985 23.6413 10.3125 22.939C8.72851 21.8177 7.53912 20.2248 6.9141 18.3874C6.27851 16.5157 6.27851 14.4865 6.9141 12.6148C7.359 11.3028 8.09449 10.1082 9.06566 9.12026C10.177 7.96889 11.5841 7.14588 13.1324 6.74153C14.6808 6.33719 16.3106 6.36713 17.843 6.82807C19.0401 7.19555 20.1348 7.83762 21.0399 8.70307C21.9508 7.79682 22.8602 6.88823 23.768 5.97729C24.2368 5.48745 24.7477 5.02104 25.2094 4.51948C23.8279 3.23388 22.2063 2.23352 20.4375 1.57573C17.2165 0.406176 13.6922 0.374745 10.4508 1.48667Z"
                  fill="white"
                />
                <path
                  d="M10.4509 1.48683C13.692 0.374152 17.2163 0.404755 20.4376 1.57355C22.2067 2.23581 23.8276 3.24098 25.2071 4.53136C24.7384 5.03292 24.2438 5.50167 23.7657 5.98917C22.8563 6.89699 21.9478 7.80167 21.0399 8.70324C20.1349 7.83778 19.0402 7.19572 17.8431 6.82824C16.3111 6.36568 14.6814 6.33401 13.1326 6.7367C11.5839 7.13939 10.176 7.96088 9.06338 9.11105C8.09221 10.099 7.35672 11.2936 6.91182 12.6056L2.05322 8.84386C3.7923 5.39518 6.80342 2.7572 10.4509 1.48683Z"
                  fill="#E33629"
                />
                <path
                  d="M0.764251 12.5703C1.02539 11.2761 1.45895 10.0227 2.05331 8.84375L6.91191 12.6148C6.27632 14.4866 6.27632 16.5158 6.91191 18.3875C5.29316 19.6375 3.67363 20.8938 2.05331 22.1563C0.565385 19.1945 0.111593 15.8199 0.764251 12.5703Z"
                  fill="#F8BD00"
                />
                <path
                  d="M15.2974 12.7227H29.2474C29.7246 15.3405 29.5955 18.0328 28.8701 20.593C28.2027 22.9472 26.9062 25.075 25.1201 26.7477C23.5521 25.5242 21.9771 24.3102 20.4091 23.0867C21.1865 22.5624 21.85 21.8865 22.3599 21.0995C22.8697 20.3126 23.2155 19.4308 23.3763 18.507H15.2974C15.2951 16.5805 15.2974 14.6516 15.2974 12.7227Z"
                  fill="#587DBD"
                />
                <path
                  d="M2.05078 22.1562C3.67109 20.9062 5.29062 19.65 6.90937 18.3875C7.53564 20.2254 8.72673 21.8185 10.3125 22.939C11.3016 23.6381 12.4255 24.1234 13.6125 24.364C14.7822 24.5815 15.9819 24.5815 17.1516 24.364C18.3178 24.1666 19.4299 23.7275 20.4164 23.075C21.9844 24.2984 23.5594 25.5125 25.1273 26.7359C23.4115 28.2962 21.3197 29.384 19.057 29.8929C16.5596 30.48 13.9569 30.4519 11.4727 29.8109C9.50789 29.2863 7.67268 28.3615 6.08203 27.0945C4.39842 25.7578 3.02333 24.0733 2.05078 22.1562Z"
                  fill="#319F43"
                />
              </g>
              <defs>
                <clipPath id="clip0_600_1595">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#828282] font-[400] text-[18px]">
              {t("Sign In with Google")}
            </span>
          </div>
          <div className="flex flex-row gap-[4px] items-center justify-center">
            <span className=" text-black">{t("Not Registered yet?")}</span>
            <a href="/signup" className=" text-secondary">
              {t("Create an Account")}
            </a>
          </div>
        </form>
      </div>
      <div className="w-full p-1 bg-primary flex items-center justify-center">
        <span className="text-[14px] text-[white] font-[400]">
          @2024 MindMed, all right reserved
        </span>
      </div>
    </div>
  );
};

export default Signin;
