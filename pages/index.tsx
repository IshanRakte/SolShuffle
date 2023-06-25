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
  
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            src="/cover.png"
            height={200}
            width={400}
            style={{
              objectFit: "fill",
            }}
            alt="thirdweb"
          />
        </div>
        <h1 className={styles.h1}>SolShuffle 👋</h1>
          <p>{metadata?.description}</p>

        <WalletMultiButtonDynamic />
      
    <button disabled={isLoading} onClick={() => claim({amount: 1})}>
      Claim 1 Digital Hope
    </button>
    <p>{conditions?.claimedSupply}/{conditions?.totalAvailableSupply}</p>
      </div>
    </>
  );
};

export default Home;
