import { parseEther } from "ethers";
import { useState } from "react";

const Transfer = ({contract}) => {
    
    const [transferAddress, setTransferAddress] = useState("");
    const [transferAmount, setTransferAmount] = useState("");

    const onClickTransfer = async () => {
        try {
          if(!transferAddress || !transferAmount) return;
    
          const response = await contract.transfer(transferAddress, parseEther(transferAmount, "wei"));
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className="flex w-full items-end">
                  <div>
                    <input
                      className="input-style w-full"
                      type="text"
                      placeholder="지갑주소"
                      value={transferAddress}
                      onChange={(e) => setTransferAddress(e.target.value)}
                    />
                    <input
                      className="input-style w-full mt-4"
                      type="text"
                      placeholder="금액"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                    />
                  </div>
                  <button className="button-style ml-1" onClick={onClickTransfer}>Send</button>
                </div>
    );
};

export default Transfer;