const HDWallerProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWallerProvider(
    'sleep tower promote arch valve coconut correct almost toss arrive borrow lawn',
    'https://goerli.infura.io/v3/ff045885d4ed4200a84380898733f789'

);

const web3 = new Web3(provider);

const deploy = async ()  => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting To Deploy From Account' , accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};

deploy();
