var iv = CryptoJS.enc.Hex.parse("0a56cd9a55c3feff6349a10e8516cafe");

	function parseUserKey() {
        let userKey = document.getElementById('txtKey').value.split('');
		let key = "";

        userKey.forEach(function(char, i){
			key += char.charCodeAt().toString(16);
		});

		return key;
    }

	function FuncCifrar() {
		try{
			if (document.getElementById('txtKey').value.length != 32)
				throw new Error("A chave deve ter 32 caracteres");

			key = CryptoJS.enc.Hex.parse(parseUserKey());

			let ct = CryptoJS.AES.encrypt(document.getElementById('txtMsg').value, key, { iv: iv });
			document.getElementById('txtMsg').value = ct.ciphertext;
		}
		catch(e){
			alert(e);
		}
	}

	function FuncDecifrar() {
		key = CryptoJS.enc.Hex.parse(parseUserKey());

		let ct_hex = CryptoJS.enc.Hex.parse(document.getElementById('txtMsg').value);
		let ct_b64 = CryptoJS.enc.Base64.stringify(ct_hex);
		let pt = CryptoJS.AES.decrypt(ct_b64, key, { iv: iv });

		document.getElementById('txtMsg').value = pt.toString(CryptoJS.enc.Utf8);
	}

	function hideKey() {
		if (document.getElementById('txtKey').type == "password")
			document.getElementById('txtKey').type = "text";
		else
			document.getElementById('txtKey').type = "password";
	 }