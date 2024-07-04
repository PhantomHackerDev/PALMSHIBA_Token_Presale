import "./TermsAndConditions.css";

import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <section
      id="termsAndConditions"
      className="px-7 sm:px-[65px] z-10 overflow-y-hidden"
    >
      <h1 className="my-[82px] text-center lg:flex grid justify-center font-holtwood text-[30px] lg:text-[36px]">
        <a className="cursor-pointer" onClick={() => handleHome()}>
          <span className="bg-gradient-to-r from-[#F7A039] to-[#F04B56] bg-clip-text text-transparent">
            PALMSHIBA
          </span>
        </a>
        <span className="lg:block hidden">&nbsp;</span>
        <span className="text-white">TERMS AND CONDITIONS</span>
      </h1>
      <div className="text-white mt-[80px] relative">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          1. Introduction
        </h2>
        <p>
          The following Terms of Use govern your access to and use of the
          Bitcoin Minetrix token ($PSHIBA), the Palm Shiba website
          https://palmshiba.com and any related services provided by Palm Shiba.
          By accessing, using the website (https:// palmshiba.com) and/or
          purchasing and using $PSHIBA token, you agree to comply with and be
          bound by these terms. If you do not agree with these terms, you must
          refrain from accessing or using https://palmshiba.com.
        </p>
        <p>
          These terms of use along with the Privacy Policy and Cookies Policy
          also available on the website constitute your legal agreement between
          you and Palm Shiba. You agree not to assign any rights or obligations
          under these Terms, whether by operation of law or otherwise, without
          our prior written consent. We may assign our rights and obligations
          under these Terms in our sole discretion to an affiliate, or in
          connection with a subcontractor, offshore company, acquisition, sale
          or merger.
        </p>
        <p>
          If any paragraphs or clauses contained in this Terms of Use become
          unenforceable or invalid, this would not affect the applicability of
          any of the others parts of this terms of use and/or the validity of
          this entire policy. 
        </p>
        <img
          src="images/shiba_footprint.png"
          className="absolute rotate-[-8.3deg] w-[261.54px] opacity-[55%] h-[261.54px] bottom-[10px] left-[20%]"
        />
      </div>
      <div className="text-white mt-[80px] relative">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          2.Acceptance of Terms
        </h2>
        <p>
          By accessing or using the https://palmshiba.com, you acknowledge that
          you have read, understood, and agree to abide by these Terms. These
          Terms may be changed at any later time which can be checked against
          the “Last Updated” date. By either continuing to use the website
          https://palmshiba.com and/or buying, acquiring or being in the
          possession of $PSHIBA token after the updated terms of use, you
          inherently agree to the modifications of these terms of use.
        </p>
        <img
          src="images/palm_tree_1.png"
          className="absolute rotate-[-8.3deg] w-[299.54px] opacity-[25%] h-[299.54px] -top-[100px] right-0"
        />
      </div>
      <div className="text-white mt-[80px] relative">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          3. Definitions
        </h2>
        <p>
          "Palm Shiba" refers to the cryptocurrency project developed with the
          objective as defined by its creators
        </p>
        <p>
          "Palm Shiba" can also refer to the company, when that is the case, the
          word “company” would be included to avoid confusion with the same-name
          project specified above.
        </p>
        <p>
          "$PSHIBA" refers to the digital cryptocurrency token associated with
          the Palm Shiba project.
        </p>
        <p>
          "Users" or "You" refers to any individual or entity that purchases,
          uses, or interacts with either the website https://palmshiba.com or
          the token $PSHIBA.
        </p>
        <img
          src="images/palm_tree_1.png"
          className="absolute w-[299.54px] opacity-[25%] h-[299.54px] top-[100px] left-[20px]"
        />
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          4. Project Description and Company Identity
        </h2>
        <p>
          Palm Shiba is the first stake-to-mine cryptocurrency project which
          gives buyers the opportunity to earn credits for staked tokens that
          can later be exchanged for an amount of mining time. Its operations
          and revolutionary utility are supported by $PSHIBA which is an ERC-20
          token AND BEP-20 developed on the Blockchain.
        </p>
        <p>
          The project is developed by Cloud Tech X23 Limited which is registered
          in Marshall Islands and has offices based in Trust Company Complex,
          Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960. The
          location and country of the Palm Shiba company does not represent the
          location of the mining facility which does not form part of the
          company and will be revealed later at our sole discretion. Therefore
          these two should not be considered or expected to be the same entity.
        </p>
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          5. Eligibility
        </h2>
        <p>
          You must be at least 18 years old to use our platform. By using
          https://palmshiba.com, you confirm that you are of legal age in your
          jurisdiction.
        </p>
        <p>
          We are not intending to market our services to anyone underage. If any
          minor engages with https://palmshiba.com and/or buys $PSHIBA token, it
          is considered they do so with the support and consent of their parent
          or guardian and therefore, we are not made to be responsible for their
          activities.
        </p>
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          6. Prohibited Activities
        </h2>
        <p>While using palmshiba.com, you agree not to:</p>
        <p>
          a. Engage in illegal activities, including money laundering, fraud, or
          any other criminal behavior.
        </p>
        <p>
          b. Disrupt the platform's functionality, attempt to hack, or gain
          unauthorized access to our systems.
        </p>
        <p>
          c. Transmit or share any content that is offensive, harmful, engages
          in bullying or violates the rights of others.
        </p>
        <p>
          d. Engage in manipulative trading practices, pump and dump schemes, or
          any other actions that could harm the integrity or reputation of the
          $PSHIBA token or its community as these are strictly prohibited.
        </p>
        <p>
          e. Take part in any activity that could potentially distribute any
          malwares to either the website, platform or its users. To protect
          against any dangerous activity we recommend using an antivirus or
          checking you are only accessing the correct website
          https://palmshiba.com.
        </p>
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          7. Intellectual Property Rights
        </h2>
        <p>
          a. By accessing https://palmshiba.com, you are granted a limited,
          non-sublicensable license to access and use our services and token
          subject to the clauses in these terms.
        </p>
        <p>
          b. You agree that any information and media, including logos,
          trademarks, and text, is protected by intellectual property laws and
          therefore you cannot exercise any rights in regards to these.
        </p>
        <p>
          c.You may not modify any of our products or services nor can you
          create any derivatives associated with these without our written
          permission.
        </p>
        <p>
          d. You will not attempt to receive any financial gains from
          distributing, sharing or promoting our services and any content in
          relation to them without a written agreement with us. If you decide to
          either provide us with any suggestions or feedback as well as endorse
          or promote our token and services on either your personal social
          accounts or external websites, you are doing so voluntarily and
          therefore you are not expected to be compensated or given any
          ownership for those. 
        </p>
        <p>
          e. By purchasing and/or staking $PSHIBA, you acknowledge and
          understand that you are not purchasing any rights, ownership, or stake
          in the mining infrastructure, equipment, or any other physical assets
          related to the PALM SHIBA project.
        </p>
      </div>
      <div className="text-white mt-[80px] relative">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          8. Cryptocurrency Risks
        </h2>
        <p>
          a. Investment Risk: Investing in cryptocurrencies, including $PSHIBA,
          carries inherent risks. Prices can be highly volatile, and you may
          lose all or part of your investment. We do not provide investment
          advice, and you are solely responsible for your investment decisions.
        </p>
        <p>
          b. Security: You are responsible for maintaining the security of your
          wallet and private keys. Palm Shiba is not liable for any losses or
          damages resulting from your failure to secure your assets properly.
        </p>
        <p>
          c. Regulatory Compliance: Cryptocurrency regulations vary by
          jurisdiction. It is your responsibility to comply with the laws and
          regulations in your area regarding cryptocurrency use.
        </p>
        <p>
          d. No Guarantees: Palm Shiba makes no guarantees or warranties about
          the value, stability, or future performance of $PSHIBA tokens.
        </p>
        <p>
          e. Claim of tokens: Claiming of the $PSHIBA tokens after the end of
          presale can only be done with the same wallet from which they were
          purchased in the presale. In the event of losing access, or the
          compromise of the wallet, you agree that we are not responsible for
          your loss, nor are we able to allow you to claim from a different
          wallet since we do not undergo any KYC procedures when enabling
          purchases during the presale. The only exception to this is if the
          transaction has been completed via WERT in which case you will need to
          contact us to verify your identity.
        </p>
        <img
          src="images/palm_tree_2.png"
          className="absolute w-[299.54px] opacity-[25%] h-[299.54px] -bottom-[30px] left-0"
        />
        <img
          src="images/shiba_footprintf_filled.png"
          className="absolute w-[299.54px] rotate-[-30deg] opacity-[17%] h-[299.54px] bottom-[500px] right-3"
        />
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          9. Limitation of Liability
        </h2>
        <p>
          Palm Shislba, its developers, employees, and associated entities will
          not be held liable for any damages, losses, or expenses resulting from
          your use or inability to use https://palmshiba.com or from any
          unauthorized access to or use of our servers and/ or any information
          stored therein. palmshiba.com is provided “as is” and “as available”
          without any warranties, expressed or implied for any particular
          purpose.
        </p>
        <p>
          Although we aim to offer a very secure and reliable service, we cannot
          guarantee that https://palmshiba.com will always be secure, timely and
          free of bugs. There might be situations in which some or all services
          might be suspended for a limited time due to technical or maintenance
          issues. We may also change or suspend parts of the services at our
          sole discretion.
        </p>
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          10. Third-party Content
        </h2>
        <p>
          palmshiba.com might, at times, display content and or links which lead
          to third-party websites. You agree that we are not responsible for any
          activity developed by any third-party websites, affiliates or
          companies and that you should inform yourself about their own terms of
          use and privacy policies before accessing their services.
        </p>
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          11. Privacy Policy
        </h2>
        <p>
          Your use of palmshiba.com is subject to our Privacy Policy, which
          outlines how we collect, use, and protect your personal information.
          By using our platform, you consent to the practices described in our
          Privacy Policy which is also available on our website. For more
          information, we recommend checking our Cookies Policy as well. 
        </p>
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          12. Governing Law
        </h2>
        <p>
          These Terms are governed by the laws of Mike David, without regard to
          its conflict of law principles. You represent and warrant that you are
          not: (a) located in, under the control of, or a national or resident
          of any country to which cryptocurrencies are not legally available to
          trade; or (b) placed on the Commerce Department’s David Persons List.
          You further represent and warrant that you will not use the Site if
          the laws of your country prohibit you from doing so in accordance with
          these Terms.
        </p>
      </div>
      <div className="text-white mt-[80px]">
        <h2 className="text-[27px] sm:text-[40px] font-holtwood text-center sm:text-left">
          13. Contact Information
        </h2>
        <p>
          If you have any questions or concerns regarding these Terms or
          palmshiba.com website, you can contact us at palmshiba@gmail.com.
        </p>
        <p>
          By using palmshiba.com, you acknowledge that you have read and
          understood these Terms of Service and agree to be bound by them. These
          Terms along with the Privacy and Cookies policy constitute the entire
          agreement between you and Bitcoin Minetrix
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
