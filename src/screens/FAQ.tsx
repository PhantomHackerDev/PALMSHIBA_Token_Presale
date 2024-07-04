import { FaqItem } from "../components/FaqItem";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="gird lg:flex justify-between mt-[150px] px-7 sm:px-20 z-10"
      data-aos="flip-down"
    >
      <div className="grid sm:flex lg:grid">
        <div className="text-center md:text-left">
          <img
            src="images/faq.png"
            className="w-[78.54px] h-[64px] m-auto md:m-0"
          />
          <h3 className="text-[35px] sm:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#600606] font-holtwood">
            PALMSHIBA
          </h3>
          <h3 className="font-holtwood text-white text-[30px] sm:text-[40px] ">
            FAQ
          </h3>
          <p className="font-helvetica text-[20px] w-[350px] sm:w-auto text-white text-opacity-40">
            Frequently asked questions regarding our Palmshiba
          </p>
        </div>

        <div className="mx-auto w-[370px] mt-[100px] sm:mt-0 lg:mt-[150px] h-[370px] relative">
          <img
            src="images/leaves.png"
            className="sm:w-[370px] sm:h-[300px] absolute bottom-[30%] left-[5%]"
            alt="leaves image"
          />
          <img
            src="images/shiba.png "
            className="sm:w-[370px] sm:h-[300px] absolute"
            alt="shiba image"
          />
        </div>
      </div>
      <div className="w-full lg:w-[60%]">
        <FaqItem no="01" title="WHAT IS 'PALM SHIBA'?">
          <div>
            Step into the digital frontier of 'palmshiba', a captivating journey
            set in the crypto Wild West. This project transcends the traditional
            boundaries of cryptocurrency, inviting you to partake in a thrilling
            adventure filled with creativity, strategy. At its core, 'palmshiba'
            is about navigating the vast, unpredictable terrains of the crypto
            world with the agility and wit of a Shiba cowboy, all while engaging
            in high-stakes battles that promise not just exhilaration but also
            rewarding ventures.
          </div>
        </FaqItem>
        <FaqItem
          no="02"
          title="HOW CAN I PARTICIPATE IN THE 'PALMSHIBA' PRESALE?"
        >
          <div>
            To join the presale of 'PALMSHIBA', follow these steps: First,
            ensure you have a digital wallet that supports cryptocurrency
            transactions. Visit our website's presale section and connect your
            wallet. You'll then be able to participate in the presale by
            exchanging your preferred cryptocurrency for $PSHIBA tokens.
            Detailed instructions and the presale schedule are available on our
            website, ensuring you're well-equipped to join this digital duel at
            the frontier of the crypto world.
          </div>
        </FaqItem>
        <FaqItem
          no="03"
          title="WHAT MAKES $PALMSHIBA DIFFERENT FROM OTHER MEMECOINS?"
        >
          <div>
            $PALMSHIBA is not just another token in the vast ocean of memecoins;
            it's a testament to innovation, creativity, and the spirited essence
            of the Wild West. Unlike traditional memecoins, $PALMSHIBA embodies
            a duel of wits and strategy, offering participants an immersive
            experience that goes beyond mere transactions. With its unique
            theme, engaging community events, and a clear roadmap towards
            sustainability and utility, $PALMSHIBA aims to stand out as a token
            with both charm and value.
          </div>
        </FaqItem>
        <FaqItem no="04" title="WHEN CAN I CLAIM MY $PALMSHIBA">
          <div>
            The official date and time for token claiming will be announced
            shortly after the presale concludes. Stay tuned to our official
            channels for the exact details.
          </div>
        </FaqItem>
        <FaqItem no="05" title="HOW DO I CONTACT THE TEAM?">
          <div>
            For direct inquiries, feedback, or support, you can get in touch
            with the team on the PALMSHIBA Telegram channel or Twitter.
          </div>
        </FaqItem>
      </div>
    </section>
  );
};

export default FAQ;
