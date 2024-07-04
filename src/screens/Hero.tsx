import { useEffect, useState } from "react";

import Grid from "../components/Grid";
import ShibaBlock from "../components/ShibaBlock";
import TimeAtomicBlock from "../components/TimeAtomicBlock";

import { toast } from "react-toastify";
import Notification from "../components/Notification";

import { ToastContainer } from "react-toastify";
import {
  useAccount,
  useBalance,
  useWriteContract,
  useReadContract,
} from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Web3 from "web3";
import { ethers } from "ethers";
import { parseEther as viemParseEther } from "viem";

///////////////      RPC URLs     ///////////////
const ETHEREUM_RPC_URL = "wss://ethereum-rpc.publicnode.com";
const BINANCE_RPC_URL = "https://bsc-rpc.publicnode.com";

/////////////// Token contract constants   ///////////////////////
import ETHEREUM_PRESALE_CONTRACT_ABI from "../utils/ethereumABI.json";
import BINANCE_PRESALE_CONTRACT_ABI from "../utils/binanceABI.json";
import ETHEREUM_USDT_CONTRACT_ABI from "../utils/erc20.json";
import BINANCE_USDT_CONTRACT_ABI from "../utils/bep20.json";
import ShibaBlock_top from "../components/ShibaBlock_top";

// const BINANCE_TOKEN_CONTRACT_ADDRESS = "0xF6a43c94C28cb98f06D86F174b3A7d337c4A3436"; //Test
const ETHEREUM_PRESALE_CONTRACT_ADDRESS =
  "0x10aa951fB435e21A85Ca2e3CF6819DaB4887c19A";
const BINANCE_PRESALE_CONTRACT_ADDRESS =
  "0x502D334EE743888B1680030A19C22b2934A24087"; //REAL

//USDT token address
const USDT_ADDRESS_ON_ETHEREUM = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const USDT_ADDRESS_ON_BINANCE = "0x55d398326f99059fF775485246999027B3197955";

//Pshiba token address
// const PSHIBA_ADDRESS_ON_ETHEREUM = "0x5DFADeacc8239edBDa5598AEEd615d18F6825dE9";
// const PSHIBA_ADDRESS_ON_BSC = "0x5DFADeacc8239edBDa5598AEEd615d18F6825dE9";

const Hero = () => {
  /////////////// State & variables       ////////////////////////////
  const [isBuyWithOpened, setIsBuyWithOpened] = useState<boolean>(false);
  const [selectedBuyMethod, setSelectedBuyMethod] = useState<string>("USDT");
  const [buyAmount, setBuyAmount] = useState<string>("");
  const [receiveAmount, setReceiveAmount] = useState<Number>(0.0);
  const [connectedNetworkName, setConnectedNetworkName] =
    useState<string>("None");

  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [daysRemained, setDaysRemained] = useState<Number>(0);
  const [hoursRemained, setHoursRemained] = useState<Number>(0);
  const [minutesRemained, setMinutesRemained] = useState<Number>(0);
  const [secondsRemained, setSecondRemained] = useState<Number>(0);

  const [ethPrice, setEthPrice] = useState<Number>();
  const [bnbPrice, setBnbPrice] = useState<Number>();
  const [timeRemained, setTimeRemained] = useState<Number | undefined>();

  const { open } = useWeb3Modal();
  const { address, isConnected, chainId } = useAccount();
  const balance = useBalance({
    address: address,
  });
  const usdtBalance = useBalance({
    address: address,
    token:
      connectedNetworkName === "ETHEREUM"
        ? USDT_ADDRESS_ON_ETHEREUM
        : USDT_ADDRESS_ON_BINANCE,
    chainId,
  });

  const { writeContractAsync } = useWriteContract();

  const { data: shibaPrice } = useReadContract({
    abi:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ABI
        : BINANCE_PRESALE_CONTRACT_ABI,
    address:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ADDRESS
        : BINANCE_PRESALE_CONTRACT_ADDRESS,
    functionName: "getCurrentTokenPrice",
    chainId: chainId === undefined ? 56 : chainId,
  });
  console.log("contract shiba price value", shibaPrice);

  const { data: claimAmount } = useReadContract({
    abi:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ABI
        : BINANCE_PRESALE_CONTRACT_ABI,
    address:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ADDRESS
        : BINANCE_PRESALE_CONTRACT_ADDRESS,
    functionName: "getBalance",
    account: address,
    chainId: chainId === undefined ? 56 : chainId,
  });
  console.log("Buy Amount", shibaPrice);

  const { data: _timeRemained } = useReadContract({
    abi:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ABI
        : BINANCE_PRESALE_CONTRACT_ABI,
    address:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ADDRESS
        : BINANCE_PRESALE_CONTRACT_ADDRESS,
    functionName: "calculateRemainingTime",
    chainId: chainId === undefined ? 56 : chainId,
  });

  const { data: totalCap } = useReadContract({
    abi:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ABI
        : BINANCE_PRESALE_CONTRACT_ABI,
    address:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ADDRESS
        : BINANCE_PRESALE_CONTRACT_ADDRESS,
    functionName: "totalCap",
    chainId: chainId === undefined ? 56 : chainId,
  });
  console.log("contract totalcap value", totalCap);

  const { data: presaleStarted } = useReadContract({
    abi:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ABI
        : BINANCE_PRESALE_CONTRACT_ABI,
    address:
      chainId === 1
        ? ETHEREUM_PRESALE_CONTRACT_ADDRESS
        : BINANCE_PRESALE_CONTRACT_ADDRESS,
    functionName: "presaleStarted",
    chainId: chainId === undefined ? 56 : chainId,
  });
  console.log("contract presale value", presaleStarted);

  ///////////////   helper functions      ////////////////////////////
  const myRound = (valueToBeRounded: any): any => {
    let tmpVal = Math.round(parseFloat(valueToBeRounded) * 10 ** 4);
    return tmpVal / 10 ** 4;
  };

  const getETHPrice = async () => {
    try {
      const uniswapPairAddress = "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852";
      // Connect to Ethereum
      const provider = new ethers.WebSocketProvider(
        "wss://ethereum-rpc.publicnode.com"
      );

      // Load Uniswap's ETH/USDT pair contract
      const uniswapPairContract = new ethers.Contract(
        uniswapPairAddress,
        [
          "function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
        ],
        provider
      );

      // Get reserves (in this case, ETH and USDT reserves)
      const reserves = await uniswapPairContract.getReserves();
      const reserveETH = reserves.reserve0;
      const reserveUSDT = reserves.reserve1;

      // Calculate ETH price in terms of USDT
      const ethPriceInUSDT = (reserveUSDT * ethers.WeiPerEther) / reserveETH;
      console.log("ethereum price", Number(ethPriceInUSDT) / 10 ** 6);
      setEthPrice(Number(ethPriceInUSDT) / 10 ** 6);
    } catch (err) {
      console.log(err);
    }
  };

  const getBNBPrice = async () => {
    try {
      const pancakeswapv2routeraddress =
        "0x10ED43C718714eb63d5aA57B78B54704E256024E";
      const provider = new ethers.WebSocketProvider(
        "wss://bsc-rpc.publicnode.com"
      );
      const uniswapPairContract = new ethers.Contract(
        pancakeswapv2routeraddress,
        [
          "function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)",
        ],
        provider
      );

      const amounts = await uniswapPairContract.getAmountsOut(
        BigInt(10 ** 18),
        [
          "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "0x55d398326f99059fF775485246999027B3197955",
        ]
      );
      const _bnbprice = Number(amounts[1]) / Number(10 ** 18);
      console.log("BNB price", Math.floor(_bnbprice * 10 ** 4) / 10 ** 4);
      setBnbPrice(Math.floor(_bnbprice * 10 ** 4) / 10 ** 4);
    } catch (err) {
      console.log(err);
    }
  };

  ////////////// Core functions      //////////////////////////////
  const calcReceiveAmount = async () => {
    if (!shibaPrice) return;
    let tmpBuyAmount = parseFloat(buyAmount);
    if (isNaN(tmpBuyAmount) || tmpBuyAmount <= 0) {
      setReceiveAmount(0.0);
      return;
    }
    let price;
    switch (selectedBuyMethod) {
      case "BSC":
        price = Number(shibaPrice) / 10 ** 4;
        let tmpBnbReceiveAmount = (Number(bnbPrice) * tmpBuyAmount) / price;
        setReceiveAmount(myRound(tmpBnbReceiveAmount));
        break;
      case "ETH":
        price = Number(shibaPrice) / 10 ** 4;
        let tmpEthReceiveAmount = (Number(ethPrice) * tmpBuyAmount) / price;

        setReceiveAmount(myRound(tmpEthReceiveAmount));
        break;
      case "USDT":
        price = Number(shibaPrice) / 10 ** 4;
        let tmpUsdtReceiveAmount = tmpBuyAmount / price;
        setReceiveAmount(myRound(tmpUsdtReceiveAmount));
        break;
    }
  };

  const doBuyTokens = async () => {
    if (!isConnected || (chainId !== 1 && chainId !== 56) || web3 === null)
      return;
    let tmpBuyAmount = parseFloat(buyAmount);
    if (isNaN(tmpBuyAmount) || tmpBuyAmount <= 0) {
      setReceiveAmount(0.0);
      return;
    }
    console.log("//////////////////", tmpBuyAmount);
    switch (selectedBuyMethod) {
      case "BSC":
        try {
          let hash = await writeContractAsync({
            abi: BINANCE_PRESALE_CONTRACT_ABI,
            address: BINANCE_PRESALE_CONTRACT_ADDRESS,
            functionName: "buyTokenWithBNB",
            value: viemParseEther(tmpBuyAmount.toString()),
          });
          toast(
            <Notification
              type={"success"}
              msg={`Successfully Purchased.\n ${hash}`}
            />
          );
        } catch (error: any) {
          toast(
            <Notification type={"fails"} msg={`${error.message || error}`} />
          );
        }
        break;
      case "ETH":
        try {
          let hash = await writeContractAsync({
            abi: ETHEREUM_PRESALE_CONTRACT_ABI,
            address: ETHEREUM_PRESALE_CONTRACT_ADDRESS,
            functionName: "buyTokenWithETH",
            value: viemParseEther(tmpBuyAmount.toString()),
          });
          toast(
            <Notification
              type={"success"}
              msg={`Successfully Purchased.\n ${hash}`}
            />
          );
        } catch (error: any) {
          toast(
            <Notification type={"fails"} msg={`${error.message || error}`} />
          );
        }
        break;
      case "USDT":
        if (chainId === 1) {
          let approved: any = false;
          // Approve
          try {
            await writeContractAsync({
              abi: ETHEREUM_USDT_CONTRACT_ABI,
              address: USDT_ADDRESS_ON_ETHEREUM,
              functionName: "approve",
              args: [ETHEREUM_PRESALE_CONTRACT_ADDRESS, tmpBuyAmount * 10 ** 6],
            });
            approved = true;
            // toast(
            //   <Notification
            //     type={"success"}
            //     msg={`Successfully Purchased.\n ${hash}`}
            //   />
            // );
          } catch (error: any) {
            toast(
              <Notification type={"fails"} msg={`${error.message || error}`} />
            );
          }
          if (!approved) break;
          try {
            let hash = await writeContractAsync({
              abi: ETHEREUM_PRESALE_CONTRACT_ABI,
              address: ETHEREUM_PRESALE_CONTRACT_ADDRESS,
              functionName: "buyTokenWithUSDT",
              args: [tmpBuyAmount * 10 ** 6],
            });
            toast(
              <Notification
                type={"success"}
                msg={`Successfully Purchased.\n ${hash}`}
              />
            );
          } catch (error: any) {
            toast(
              <Notification type={"fails"} msg={`${error.message || error}`} />
            );
          }
        }

        if (chainId === 56) {
          let approved: any = false;
          // Approve
          try {
            await writeContractAsync({
              abi: BINANCE_USDT_CONTRACT_ABI,
              address: USDT_ADDRESS_ON_BINANCE,
              functionName: "approve",
              args: [BINANCE_PRESALE_CONTRACT_ADDRESS, tmpBuyAmount * 10 ** 18],
            });
            approved = true;
            // toast(
            //   <Notification
            //     type={"success"}
            //     msg={`Successfully Purchased.\n ${hash}`}
            //   />
            // );
          } catch (error: any) {
            toast(
              <Notification type={"fails"} msg={`${error.message || error}`} />
            );
          }
          if (!approved) break;

          try {
            let hash = await writeContractAsync({
              abi: BINANCE_PRESALE_CONTRACT_ABI,
              address: BINANCE_PRESALE_CONTRACT_ADDRESS,
              functionName: "buyTokenWithUSDT",
              args: [tmpBuyAmount * 10 ** 18],
            });
            toast(
              <Notification
                type={"success"}
                msg={`Successfully Purchased.\n ${hash}`}
              />
            );
          } catch (error: any) {
            toast(
              <Notification type={"fails"} msg={`${error.message || error}`} />
            );
          }
        }
        // contract?.methods
        //   .buyTokenWithUSDT({
        //     _usdtAmount: parseFloat(buyAmount),
        //   })
        //   .send({ from: address })
        //   .on("transactionHash", function (hash: any) {
        //     toast(
        //       <Notification
        //         type={"success"}
        //         msg={`Successfully Purchased.\n ${hash}`}
        //       />
        //     );
        //   })
        //   .on("error", function (error: any) {
        //     toast(<Notification type={"fails"} msg={`${error}`} />);
        //   });
        break;
    }
  };

  /////////////// UI EVENT HANDLE SECTION /////////////////////////////
  const handleBuyWithSelected = (chainName: string) => {
    setSelectedBuyMethod(chainName);
    setBuyAmount("0");
    setReceiveAmount(0);
    switch (chainName) {
      case "BSC":
        break;
      case "ETH":
        break;
      case "USDT":
        break;
    }
    setIsBuyWithOpened(false);
  };

  const getBuyWithMethodImageUrl = () => {
    return "images/" + selectedBuyMethod + ".png";
  };

  const handleBuyWithButtonClicked = () => {
    setIsBuyWithOpened(!isBuyWithOpened);
  };

  //input amount change
  const handleBuyAmountChanged = (e: any) => {
    setBuyAmount(e.target.value);
  };

  const handleBuyTokens = () => {
    doBuyTokens();
  };

  /////////// UI helper function ////////////
  const TimeAtomicBlockSepeateComp = () => {
    return (
      <div className="m-auto w-[5.42px] h-[18.97px] flex justify-between flex-col">
        <div className="bg-white w-[5.42px] h-[5.42px] rounded-full"></div>
        <div className="bg-white w-[5.42px] h-[5.42px] rounded-full"></div>
      </div>
    );
  };

  const dispCoreButton = () => {
    if (isConnected) {
      return (selectedBuyMethod === "USDT" &&
        Number(buyAmount) * 10 ** 6 < Number(usdtBalance.data?.value)) ||
        (selectedBuyMethod !== "USDT" &&
          Number(buyAmount) * 10 ** 18 < Number(balance.data?.value)) ? (
        <button
          onClick={() => handleBuyTokens()}
          className=" bg-[#0D0B33] h-[53px] tracking-wider font-shareTech mx-auto sm:mx-0 text-[20px] w-[90%] sm:w-full rounded-lg font-normal text-white"
        >
          Buy Now
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-900 h-[53px] tracking-wider font-shareTech mx-auto sm:mx-0 text-[20px] w-[90%] sm:w-full rounded-lg font-normal text-white"
        >
          Insufficient Amount
        </button>
      );
    } else {
      return (
        <button
          onClick={() => open()}
          className="bg-[#0D0B33] h-[53px] tracking-wider font-shareTech mx-auto sm:mx-0 text-[20px] w-[90%] sm:w-full rounded-lg font-normal text-white"
        >
          Connect Wallet
        </button>
      );
    }
  };

  useEffect(() => {
    if (!timeRemained) return;
    setDaysRemained(Math.floor(Number(timeRemained) / (60 * 60 * 24)));
    setHoursRemained(Math.floor((Number(timeRemained) / 60 / 60) % 24));
    setMinutesRemained(Math.floor((Number(timeRemained) / 60) % 60));
    setSecondRemained(Math.floor(Number(timeRemained) % 60));
    console.log(
      Number(timeRemained) / (60 * 60 * 24),
      (Number(timeRemained) / 60 / 60) % 24,
      (Number(timeRemained) / 60) % 60,
      Number(timeRemained) % 60
    );
  }, [timeRemained]);

  useEffect(() => {
    console.log("get eth & bnb price");
    if (ethPrice === undefined) getETHPrice();
    if (bnbPrice === undefined) getBNBPrice();
  }, []);

  useEffect(() => {
    if (!isConnected) return;
    console.log("connected", chainId);
    if (chainId === 1) {
      setConnectedNetworkName("ETHEREUM");
      setWeb3(new Web3(ETHEREUM_RPC_URL));
      setSelectedBuyMethod("ETH");
    } else if (chainId === 56) {
      setConnectedNetworkName("BINANCE");
      setWeb3(new Web3(BINANCE_RPC_URL));
      setSelectedBuyMethod("BSC");
    }
    setBuyAmount("0.0");
    setReceiveAmount(0.0);
  }, [isConnected, chainId]);

  useEffect(() => {
    calcReceiveAmount();
  }, [buyAmount, shibaPrice, selectedBuyMethod]);

  useEffect(() => {
    if (!_timeRemained) return;

    const timerHanlde = setInterval(() => {
      if (timeRemained === 0) clearInterval(timerHanlde);
      else {
        setTimeRemained((x: Number | undefined) => {
          if (x === undefined) return Number(_timeRemained);
          else return Number(x.valueOf() - 1);
        });
        console.log("Timer : ", timeRemained);
      }
    }, 1000);

    return () => clearInterval(timerHanlde);
  }, [_timeRemained]);

  return (
    <section className="mt-[150px] lg:mt-[50px] relative">
      <div className="flex lg:mt-0 mt-[300px] justify-between px-4 sm:px-15 md:px-20 lg:pt-[10%]">
        <ShibaBlock_top />
        <Grid
          className="z-1 bg-[#141746] sm:w-full  lg:w-[600px] w-full md:m-auto lg:m-0 rounded-[45px] border-[9px] border-[#1B0C3D] justify-center items-center"
          // data-aos-easing="ease-in"
          // data-aos="flip-up"
        >
          <Grid className=" shadow-md gap-6 py-8">
            <Grid className="items-center gap-4 px-4">
              <h2 className="text-[35px] sm:text-[40px] text-center text-pretty font-holtwood font-bold text-white">
                BUY{" "}
                <span className="text-[#F7A039] block sm:inline">PALSHIBA</span>
              </h2>
              <p className="text-white font-shareTech text-[25.24px]">
                {presaleStarted === true
                  ? "Time Remain"
                  : "Presale not started"}
              </p>
            </Grid>

            <div>
              <div className="flex justify-center">
                <TimeAtomicBlock title="days" value={daysRemained} />
                <TimeAtomicBlockSepeateComp />
                <TimeAtomicBlock title="hours" value={hoursRemained} />
                <TimeAtomicBlockSepeateComp />
                <TimeAtomicBlock title="minutes" value={minutesRemained} />
                <TimeAtomicBlockSepeateComp />
                <TimeAtomicBlock title="seconds" value={secondsRemained} />
              </div>
              <div className="pt-7 mt-5 sm:mt-0">
                <div className="sm:flex sm:justify-between grid justify-center">
                  <p className="font-shareTech sm:mx-0 mx-auto my-auto text-white text-[32px]">
                    RAISED:
                  </p>
                  <p className="font-shareTech my-auto text-[#F7A039] text-[24px]">
                    ${" "}
                    {!totalCap
                      ? "0"
                      : Math.floor(
                          Number(totalCap) /
                            (chainId === 1 ? 10 ** 2 : 10 ** 14)
                        ) /
                        10 ** 4}
                    /$2,000,000
                  </p>
                </div>

                <div className="sm:flex sm:justify-between grid justify-center">
                  <p className="font-shareTech sm:mx-0 mx-auto my-auto text-white text-[32px]">
                    Claimed:
                  </p>
                  <p className="font-shareTech my-auto text-[#F7A039] text-[24px]">
                    {!claimAmount
                      ? "0"
                      : Math.floor(Number(claimAmount) / 10 ** 14) /
                        10 ** 4}{" "}
                    $PSHIBA
                  </p>
                </div>

                <div className="flex justify-between">
                  <div className="sm:block hidden w-[125px] border my-auto border-white"></div>
                  <p className="h-[23px] mx-auto sm:mx-0 text-[#F7A039] font-shareTech text-[20px] text-center">
                    1 PSHIBA = $
                    {!shibaPrice ? "0" : Number(shibaPrice) / 10 ** 4}
                  </p>
                  <div className="sm:block hidden w-[125px] border my-auto border-white"></div>
                </div>
                <div className="mt-7 sm:mt-0 grid sm:flex sm:justify-between">
                  <div className="text-center sm:text-left">
                    <p className="font-shareTech  text-white text-[20px]">
                      Amount you pay
                    </p>
                    <div className="relative flex justify-between mx-auto sm:mx-0 w-[90%] sm:w-[182px] h-[53px] rounded-[8px] bg-[#0D0B33]">
                      <div className="m-auto">
                        <input
                          type="text"
                          value={buyAmount}
                          onChange={(e) => handleBuyAmountChanged(e)}
                          className="text-[#F7A039] pl-3 font-poppins outline-none w-[115px] bg-transparent text-[20px]"
                        />
                      </div>
                      <div className="flex justify-between m-auto">
                        <div className="m-auto h-[34px] w-0 border border-gray-700"></div>
                        <div
                          className="m-auto"
                          onClick={() => handleBuyWithButtonClicked()}
                        >
                          <img
                            src={getBuyWithMethodImageUrl()}
                            className="w-[50px]"
                          />
                        </div>
                      </div>
                      <div
                        className={`${
                          isBuyWithOpened ? "block" : "hidden"
                        } absolute z-20 rounded-md top-[53px] left-0 w-[100%] sm:w-[182px] bg-[#0D0B33] drop-shadow-[2px_3px_3px_rgba(255,255,255,0.55)]`}
                      >
                        <p className="text-white ml-[20px] font-poppins text-[20px]">
                          Buy with
                        </p>
                        <div
                          onClick={() => handleBuyWithSelected("BSC")}
                          className={`${
                            connectedNetworkName === "ETHEREUM"
                              ? "hidden"
                              : "block"
                          } cursor-pointer flex text-left`}
                        >
                          <div className="m-auto w-[38px] h-[38px]">
                            <img
                              src="images/BSC.png"
                              className="w-[38px] h-[38px]"
                            />
                          </div>
                          <p className="pl-[10px] my-auto w-[144px] font-poppins text-white text-[16px]">
                            Binance Token
                          </p>
                        </div>
                        <div
                          onClick={() => handleBuyWithSelected("ETH")}
                          className={`${
                            connectedNetworkName === "BINANCE"
                              ? "hidden"
                              : "block"
                          } cursor-pointer flex text-left`}
                        >
                          <div className="m-auto w-[38px] h-[38px]">
                            <img
                              src="images/ETH.png"
                              className="w-[38px] h-[38px]"
                            />
                          </div>
                          <p className="pl-[10px] my-auto w-[144px] font-poppins text-white text-[16px]">
                            Ethereum
                          </p>
                        </div>
                        <div
                          onClick={() => handleBuyWithSelected("USDT")}
                          className="cursor-pointer flex text-left"
                        >
                          <div className="m-auto w-[38px] h-[38px]">
                            <img
                              src="images/USDT.png"
                              className="w-[37px] h-[37px]"
                            />
                          </div>
                          <p className="pl-[10px] my-auto w-[144px] font-poppins text-white text-[16px]">
                            USDT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 text-center sm:text-left">
                    <p className="font-shareTech text-white text-[20px]">
                      PALMSHIBA you receive
                    </p>
                    <div className="flex justify-between mx-auto sm:mx-0 w-[90%] sm:w-[182px] h-[53px] rounded-[8px] bg-[#0D0B33]">
                      <div className="m-auto">
                        <input
                          type="text"
                          value={receiveAmount.toString()}
                          readOnly={true}
                          className="text-[#F7A039] bg-transparent outline-none w-[115px]  pl-3 font-poppins text-[20px]"
                        />
                      </div>

                      <div className="m-auto">
                        <img
                          src="images/palmshiba_icon.png"
                          className="w-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {dispCoreButton()}

            <button
              onClick={handleBuyTokens}
              className="bg-[#0D0B33] h-[53px] tracking-wider mx-auto sm:mx-0 font-shareTech text-[20px] w-[90%] sm:w-full rounded-lg font-normal text-white"
            >
              How to buy
            </button>
          </Grid>
        </Grid>
        <ShibaBlock />
      </div>

      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
    </section>
  );
};

export default Hero;
