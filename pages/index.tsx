import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useProgram, useClaimNFT, useClaimConditions, useProgramMetadata } from "@thirdweb-dev/react/solana";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {

  const { program } = useProgram("74bH9jb2axxWCu9bEV3C5KRWvAAXRf8Zw2Ba6CvqJsQd", "nft-drop");
  const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);
  const {data: conditions, isLoading: conditionsisLoading} = useClaimConditions(program);
  const {data: metadata, isLoading: metadataIsLoading} = useProgramMetadata(program);
  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
  };
  const paragraphStyle: React.CSSProperties = {
    width: 750,
  };
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            src="/cover2.png"
            height={300}
            width={600}
            style={{
              objectFit: "fill",
            }}
            alt="thirdweb"
          />
        </div>
        <h1 className={styles.h1}>Digital Hope 🍀</h1>
          <p style={paragraphStyle}> {metadata?.description}</p>

        <WalletMultiButtonDynamic />
        <br></br>
      
    <button disabled={isLoading} onClick={() => claim({amount: 1})} style={buttonStyle}>
      Claim 1 Digital Hope
    </button>
    <p>{conditions?.claimedSupply}/{conditions?.totalAvailableSupply}</p>
      </div>
    </>
  );
};

export default Home;
