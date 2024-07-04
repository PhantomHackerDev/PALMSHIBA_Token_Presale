import { useState } from "react";
import Grid from "./Grid";

interface FaqItemProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  no?: string;
  title?: string;
  children: React.ReactNode;
}

export const FaqItem = (props: FaqItemProps) => {
  const { no, title, children } = props;
  const [show, setShow] = useState<boolean>(false);

  const getClassNameOfButton = () => {
    return show
      ? `w-[10%] bg-[#F56717] h-[70px] `
      : `w-[10%] bg-[#152329] h-[70px] `;
  };

  return (
    <Grid className="w-full mt-[2%] border-[1.88px] border-[#152329] rounded-[7.52px]">
      <ul className="space-y-8 text-gray-500 list-[square] text-[38px] dark:text-gray-400">
        <li className="lg:text-[32px]  text-white  text-2xl">
          <div className=" flex font-helvetica text-white text-[22.55px]">
            <p className="w-[10%] text-left m-auto">{no}</p>
            <p className="w-[80%] text-left m-auto">{title}</p>
            <button
              onClick={() => {
                setShow(() => !show);
              }}
              className={getClassNameOfButton()}
            >
              {show ? "-" : "+"}
            </button>
          </div>
          <Grid
            className={`${
              !show ? "!hidden" : "flex-col"
            } text-white pl-[10%] pr-[3%]  text-justify font-helvetica text-[18.79px] mt-[5%] gap-5`}
          >
            {children}
          </Grid>
        </li>
      </ul>
    </Grid>
  );
};
