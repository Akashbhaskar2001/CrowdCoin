import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x2B7f42Bb66815F0b27062C9587890201aC586C4D"
);

export default instance;
