import axios from "axios";
import React, { useEffect, useState } from "react";
import AuthButton from "../Constants/AuthButton";
import Input from "../Constants/Input";
import {
  useRegisterMutation,
  useVerifyEmailQuery,
} from "../Redux/features/AuthSlice";
import EmailSent from "../Components/Modal/EmailSents";
import { useLocation } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import { useTranslation } from "react-i18next";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorr, setError] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [verifySuccess, setVerifySuccess] = useState<boolean>(false);
  const [verificationAttempted, setVerificationAttempted] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();
  const validationFunc = (e: any) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Name Are required");
      setIsEmpty("name");
      return;
    }
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
        name,
        email,
        password,
      };
      const response = await register(credentials).unwrap();
      if (response.message === "Email Verfication Sent") {
        setModal(true);
        console.log(response);
        return;
      }
      console.log(response);
    } catch (error: any) {
      if (error.data && error.data.Message === "Email already exists") {
        setError("Email has been taken");
        setIsEmpty("email");
      } else {
        setError("Something get wrong, Try again later");
      }
      console.log(error);
    }
  };

  const loginWithGoogle = () => {
    const googleAuthUrl = `${process.env.GOOGLE_AUTH_URL}`;
    window.open(googleAuthUrl, "_self");
  };

  const location = useLocation();
  const getQueryParams = (search: string) => new URLSearchParams(search);
  const queryParams = getQueryParams(location.search);
  const token = queryParams.get("token");
  const {
    data,
    isLoading: isVerifying,
    isError,
    isSuccess,
  } = useVerifyEmailQuery(token || "", {
    skip: !token || verificationAttempted,
  });

  useEffect(() => {
    if (token && !verificationAttempted && isSuccess) {
      setVerificationAttempted(true);

      if (data && data.message === "Email verified successfully") {
        setVerifySuccess(true);
      } else {
        alert("Sorry, verification failed");
      }
    }
  }, [token, data, isSuccess, verificationAttempted]);
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center ">
      {modal ? <EmailSent email={email} /> : ""}

      {token ? (
        <div className="w-full z-50 h-screen top-0  absolute flex items-center justify-center bg-black/20">
          <div className="p-4 bg-white rounded-[12px] w-full md:w-[1/2] lg:w-1/4 flex items-center justify-center min-h-40">
            {token && isVerifying && !verificationAttempted && (
              <Puff
                visible
                height="50"
                width="50"
                color="#C9974C"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
            {token &&
              !isVerifying &&
              verificationAttempted &&
              verifySuccess && (
                <div className="  bg-white flex flex-col gap-[10px]  p-4 rounded-[12px] items-center">
                  <div className="flex flex-row gap-[10px] items-center">
                    <div className="w-full flex flex-col items-center">
                      <span className="text-start leading-4 font-outfit">
                        Your email has been successfully verified.
                      </span>
                    </div>
                  </div>
                  <a
                    href="/login"
                    className="p-3 px-4 rounded-[6px] text-white font-outfit bg-primary"
                  >
                    Continue To login
                  </a>
                </div>
              )}
            {token && !isVerifying && !verifySuccess && (
              <div className="  bg-white flex flex-col gap-[10px]  p-4  rounded-[12px] items-center">
                <div className="flex flex-row gap-[10px] items-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6493 26.5278C15.5063 26.6707 15.3366 26.7841 15.1499 26.8614C14.9631 26.9388 14.7629 26.9786 14.5608 26.9786C14.3587 26.9786 14.1585 26.9388 13.9717 26.8614C13.785 26.7841 13.6153 26.6707 13.4723 26.5278C13.3294 26.3848 13.216 26.2151 13.1387 26.0284C13.0613 25.8416 13.0215 25.6414 13.0215 25.4393C13.0215 25.2371 13.0613 25.037 13.1387 24.8502C13.216 24.6635 13.3294 24.4938 13.4723 24.3508L24.3508 13.4739C24.4936 13.331 24.6632 13.2176 24.8499 13.1402C25.0366 13.0628 25.2366 13.0229 25.4387 13.0228C25.6408 13.0228 25.8409 13.0625 26.0276 13.1398C26.2143 13.217 26.384 13.3303 26.527 13.4731C26.6699 13.616 26.7833 13.7856 26.8607 13.9722C26.9381 14.1589 26.978 14.359 26.978 14.5611C26.9781 14.7631 26.9384 14.9632 26.8611 15.15C26.7838 15.3367 26.6706 15.5064 26.5277 15.6493L15.6493 26.5278Z"
                      fill="red"
                    />
                    <path
                      d="M13.4723 15.6493C13.1837 15.3606 13.0215 14.9691 13.0215 14.5608C13.0215 14.1526 13.1837 13.761 13.4723 13.4723C13.761 13.1837 14.1526 13.0215 14.5608 13.0215C14.9691 13.0215 15.3606 13.1837 15.6493 13.4723L26.5262 24.3508C26.6691 24.4936 26.7825 24.6632 26.8599 24.8499C26.9373 25.0366 26.9772 25.2366 26.9773 25.4387C26.9773 25.6408 26.9376 25.8409 26.8603 26.0276C26.7831 26.2143 26.6698 26.384 26.527 26.527C26.3841 26.6699 26.2145 26.7833 26.0279 26.8607C25.8412 26.9381 25.6411 26.978 25.439 26.978C25.237 26.9781 25.0369 26.9384 24.8501 26.8611C24.6634 26.7838 24.4937 26.6706 24.3508 26.5277L13.4723 15.6493Z"
                      fill="red"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 36.9231C29.3462 36.9231 36.9231 29.3462 36.9231 20C36.9231 10.6538 29.3462 3.07692 20 3.07692C10.6538 3.07692 3.07692 10.6538 3.07692 20C3.07692 29.3462 10.6538 36.9231 20 36.9231ZM20 40C31.0462 40 40 31.0462 40 20C40 8.95385 31.0462 0 20 0C8.95385 0 0 8.95385 0 20C0 31.0462 8.95385 40 20 40Z"
                      fill="red"
                    />
                  </svg>

                  <div className="w-full flex flex-col items-center">
                    <span className="text-start leading-4 font-outfit">
                      Verification Link has expired or invalid token
                    </span>
                  </div>
                </div>
                <a
                  href="/signup"
                  className="p-3 px-4 rounded-[6px] text-white font-outfit bg-primary"
                >
                  Back To Sign Up
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col gap-[6px] items-center w-full md:w-[50%] lg:w-[40%]  p-2">
        <a href="/"></a>

        <div className="flex flex-col gap-[2px] items-center">
          <span className="font-[600] text-[28px] text-[#333333] font-outfit">
            {t("Sign Up")}
          </span>
          <span className="text-[18px] font-[300] text-[#A3A2A2] font-outfit">
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
            error={isEmpty === "name" ? true : !!(false || err)}
            label={t("Enter Your Name")}
            type="text"
            placeholder={t("Enter Your Name")}
            value={name}
            onChange={(value) => setName(value)}
          />
          <Input
            error={isEmpty === "email" ? true : !!(false || err)}
            label={t("Enter Your Email")}
            type="email"
            placeholder={t("Enter your email address")}
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <Input
            error={isEmpty === "password" ? true : !!(false || err)}
            label={t("Enter Your Password")}
            type="password"
            placeholder={t("Enter your password")}
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <AuthButton isLoading={!!isLoading} label={t("Sign Up")} />

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
              {t("Sign Up with Google")}
            </span>
          </div>
          <div className="flex flex-row gap-[4px] items-center justify-center">
            <span className=" text-black">
              {t("Already have an account")}?{" "}
            </span>
            <a href="/login" className=" text-secondary">
              {" "}
              {t("Login")}
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

export default SignUp;
