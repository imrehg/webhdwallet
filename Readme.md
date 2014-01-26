# WebHDWallet

Hierarchical Deterministic Wallet based on [BIP0032][bip0032]
for the web.

## Ingredients

* BIP32 maniuplation from [BIP32.org][bip32org]

## Dev notes and links

### Bitcoin Testnet

* General info at the [BlockExplorer Testnet page][blockexplorertest]
* [Transaction check example](http://blockexplorer.com/testnet/tx/256ecfe2ec0285b71396b56f8edf7045d99cb2896eddc2894433cac805e6bb10)
* [Balance request example](http://blockexplorer.com/testnet/q/getreceivedbyaddress/mm9tSEqahzfDVkPtgsSiA4FmuqRMFdi8XE)
* [Address info example](http://blockexplorer.com/testnet/address/mm9tSEqahzfDVkPtgsSiA4FmuqRMFdi8XE)
* [BTCLook Testnet](http://testnet.btclook.com)

### Javascript Bitcoin manipulation

[Brainwallet][brainwallet] has tools to do a lot of things online to check
bitcoin related calculations.

## License

TL;DR: MIT License, do what you want.

Copyright (c) 2014 Gergely Imreh <imrehg@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[bip0032]: https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
[bip32org]: http://bip32.org/
[brainwallet]: https://github.com/sarchar/brainwallet.github.com/tree/bip32
[blockexplorertest]: http://blockexplorer.com/testnet
