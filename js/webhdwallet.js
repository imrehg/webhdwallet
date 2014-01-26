<!-- var pubkey = "tpubDAgMac26hDGuMUd226dRL5Csx3xJYNgXcH1Vrr8K7pPkkrbdG6qRE2AotjohzyKRJJbRjdAsxog2htE5Rcz5ZrfLELUe5GP5HrTj6Eoyq27"; -->

Bitcoin.setNetwork('test');

var key = "tprv8dzKSByrYqbEU1bE8SxpvfYmP2SNP3Vd2yQiaL61hYbMvNLrdi1q3XYwicWPfj1Vg53w8uctzDe88KvMazWhURjTzEowtDSbsALeX6spBqd"

var ops = Bitcoin.Opcode.map;

var childs = new Array();
var addresses = new Array();

var getAddr = function(key) {
    var hash160 = key.eckey.getPubKeyHash();
    var addr = new Bitcoin.Address(hash160);
    addr.version = 0x6f;  // testnet
    return addr.toString();
}

var b = new BIP32(key);
var generate = function() {

    for (var i=0; i<12; i++) {
        c = b.derive_child(i);
	childs.push(c);
        addresses.push(getAddr(c));
        $("#results").append(getAddr(c)+"<br>");
    }
    
}

var hashFromAddr = function(string) {

    var bytes = Bitcoin.Base58.decode(string);
    var hash = bytes.slice(0, 21);  
    var checksum = Crypto.SHA256(Crypto.SHA256(hash, {asBytes: true}), {asBytes: true});
  
    if (checksum[0] != bytes[21] ||
        checksum[1] != bytes[22] ||
        checksum[2] != bytes[23] ||
        checksum[3] != bytes[24]) {
      throw "Checksum validation failed!";
    }
  
    this.version = hash.shift();
    this.hash = hash;
    return hash
}

var createOutScript = function(address) {
    var script = new Bitcoin.Script();
    script.writeOp(ops.OP_DUP);
    script.writeOp(ops.OP_HASH160);
    script.writeBytes(hashFromAddr(address));
    script.writeOp(ops.OP_EQUALVERIFY);
    script.writeOp(ops.OP_CHECKSIG);
    return script;
}

var valueFromNumber = function(number) {
    var value = BigInteger.valueOf(number*1e8);
    value = value.toByteArrayUnsigned().reverse();
    while (value.length < 8) value.push(0);
    return value;
}

var createtx = function() {
    var intx = "1197be06096230bf4b8e4de121607dd797c60df60545eda8d90b7f876f24694e";
    in0 = b.derive_child(1)
    var inaddr = getAddr(in0);
    var outaddr0 = "n2hpygZMYkGAB2zbLEaUbBr3EJ5NK9vMHp";
    var outaddr1 = getAddr(b.derive_child(0));
    console.log(inaddr);
    console.log(outaddr0);
    console.log(outaddr1);

    o0s = createOutScript(outaddr0);
    o1s = createOutScript(outaddr1);
    to0 = new Bitcoin.TransactionOut({
        value: valueFromNumber(0.01234567),
        script: o0s
    });
    to1 = new Bitcoin.TransactionOut({
        value: valueFromNumber(0.007),
        script: o1s
    });

    var tx = new Bitcoin.Transaction();

    tx.addOutput(to0);
    tx.addOutput(to1);

    tin = new Bitcoin.TransactionIn({
        outpoint: {
            hash: Bitcoin.Util.bytesToBase64(Bitcoin.Util.hexToBytes(intx).reverse()),
            index: 0
        },
        script: createOutScript(inaddr),
        sequence: 4294967295
    });
    tx.addInput(tin);

    tx.signWithKey(in0.eckey)

    return tx
}
