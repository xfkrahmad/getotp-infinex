(function(_0x470628,_0x36d318){const _0x56537f=a0_0x4527,_0x351882=_0x470628();while(!![]){try{const _0x3d7c74=-parseInt(_0x56537f(0x9f))/0x1*(-parseInt(_0x56537f(0x9a))/0x2)+parseInt(_0x56537f(0x9d))/0x3*(parseInt(_0x56537f(0xa6))/0x4)+parseInt(_0x56537f(0x9e))/0x5*(parseInt(_0x56537f(0xa7))/0x6)+parseInt(_0x56537f(0xa9))/0x7*(-parseInt(_0x56537f(0x9b))/0x8)+-parseInt(_0x56537f(0x98))/0x9+parseInt(_0x56537f(0xa0))/0xa*(parseInt(_0x56537f(0xa3))/0xb)+-parseInt(_0x56537f(0x9c))/0xc;if(_0x3d7c74===_0x36d318)break;else _0x351882['push'](_0x351882['shift']());}catch(_0x4e9371){_0x351882['push'](_0x351882['shift']());}}}(a0_0x1a91,0xaebb0));import{addingDelay,checkConfigOrWriteConfig,getDetailMsg,getMessage,getRandomEmailProcess,parseMsgToOtp,prompt,saveToFile}from'./helper.js';import a0_0x118f0e from'@colors/colors';const askForGenerating=()=>{const _0x412662=prompt('Do\x20you\x20want\x20to\x20keep\x20generating?\x20(y/n)\x20?\x20');if(_0x412662==='y')return!![];if(_0x412662==='n')return![];};function a0_0x1a91(){const _0x12ef76=['red','log','6098229QCvwag','green','2BXHUZD','2082008iGJPks','4959672MddiXZ','147lHVeDY','30klwVPc','978805Onjcnk','20dDsloL','data','length','1026707smxFnn','split','Waiting\x20for\x20OTP...','56284CBVenn','732378xepnLk','sorry,\x20looks\x20like\x20you\x20left\x20the\x20process.\x20please\x20try\x20again','21OHURyx'];a0_0x1a91=function(){return _0x12ef76;};return a0_0x1a91();}function a0_0x4527(_0x346d90,_0x1a0a99){const _0x1a9152=a0_0x1a91();return a0_0x4527=function(_0x4527cc,_0x2d0cd9){_0x4527cc=_0x4527cc-0x97;let _0x568c22=_0x1a9152[_0x4527cc];return _0x568c22;},a0_0x4527(_0x346d90,_0x1a0a99);}((async()=>{const _0x5b797a=a0_0x4527;await checkConfigOrWriteConfig();let _0x3b6da4=!![];while(_0x3b6da4){const _0xa92ba6=await getRandomEmailProcess();let _0x5a3ef3=![],_0x43045c=0x0;while(!_0x5a3ef3&&_0x43045c<0xa){console[_0x5b797a(0x97)](a0_0x118f0e[_0x5b797a(0x99)](_0x5b797a(0xa5)));const [_0x50200f,_0x238364]=_0xa92ba6[_0x5b797a(0xa4)]('@'),_0x4afa80=await getMessage(_0x50200f,_0x238364);if(_0x4afa80[_0x5b797a(0xa1)][_0x5b797a(0xa2)]==0x0){_0x43045c==0x9&&console[_0x5b797a(0x97)](a0_0x118f0e[_0x5b797a(0xaa)](_0x5b797a(0xa8)));await addingDelay(0x1388),_0x43045c++;continue;}const _0x467353=_0x4afa80[_0x5b797a(0xa1)][0x0]['id'],_0x2bed5b=await getDetailMsg(_0x50200f,_0x238364,_0x467353);_0x2bed5b[_0x5b797a(0xa1)]&&(await parseMsgToOtp(_0x2bed5b[_0x5b797a(0xa1)]),await saveToFile(_0xa92ba6),_0x5a3ef3=!![]);}_0x3b6da4=askForGenerating();}})());