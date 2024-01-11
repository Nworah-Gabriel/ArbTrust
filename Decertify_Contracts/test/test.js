const { expect } = require("chai");

describe("MyContracts", function(){

    it("Checks that the contract name deployed is correct", async function(){
        const MyContracts = await hre.ethers.getContractFactory("CertificateNFT");
        const myContractDeployed = await MyContracts.deploy("CertificateNFT", "NFT");

        //----TEST CASES ----//
        expect(await myContractDeployed.GetMintStatus()).to.equal("")
        let tx = await myContractDeployed.mintCertificate("0x532354D85920702C461C59B33b14911D8D1b97F5", 20, "ipfs://bafkreih6lb4abox5c5ebphblr6cgrrucihpsmfasl7lugjb5yw3jevnaoe");
        let updatedVar = await myContractDeployed.updateContractDeployer("0x532354D85920702C461C59B33b14911D8D1b97F5")
        await myContractDeployed.deployed();
        expect(await myContractDeployed.name()).to.equal("CertificateNFT");
        expect(await myContractDeployed.symbol()).to.equal("NFT");
        expect(await updatedVar.confirmations).to.equal(1);
        expect(await myContractDeployed.viewContractDeployer()).to.equal("0x532354D85920702C461C59B33b14911D8D1b97F5")
        expect(await myContractDeployed.GetMintStatus()).to.equal("Success")
        expect(await tx.confirmations).to.equal(1);
    })
})
