import { useState } from "react";
import abi from "../abi.json";
import { Contract } from "ethers";


const ERC20Connect = ({ name ,signer, setContract }) => {

    const [contractAddress, setContractAddress] = useState("");
    const onClickContract = () => {
        if (!signer || !contractAddress) return;
    
        setContract(new Contract(contractAddress, abi, signer));
      };

    return (
        <div className="flex w-full items-start">
            <div className="flex flex-col gap-2 grow">
              <div className="ml-1 text-lg font-bold">
                ERC20 연결 {" "}
                {name && (
                  <>
                    완료<span className="font-black">{name}</span>
                  </>
                )}
              </div>
              <input
                className="input-style"
                type="text"
                placeholder="컨트랙트 주소"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
              />
            </div>
            <button
              className="button-style ml-4 mt-9"
              onClick={onClickContract}
            >
              {name ? "교체" : "연결"}
            </button>
          </div>
    );
};

export default ERC20Connect;