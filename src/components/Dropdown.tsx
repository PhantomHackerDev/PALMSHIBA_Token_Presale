import { useState } from "react";
import Grid from "./Grid";

interface DropDownProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  children: React.ReactNode;
}

export const DropDown = (props: DropDownProps) => {
  const { title, children } = props;
  const [show, setShow] = useState<boolean>(false);

  return (
    <Grid className="w-full mt-[10%]">
      <ul
        className="space-y-8 text-gray-500 list-[square] text-[38px] dark:text-gray-400"
        onClick={() => {
          setShow(() => !show);
        }}
      >
        <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
          {title}
          <Grid
            className={`${
              !show ? "!hidden" : "flex-col"
            } text-[#AFAFAF] mt-[5%] gap-5`}
          >
            {children}
          </Grid>
        </li>
      </ul>
    </Grid>
  );
};
