module.exports = {


	t_array: function () {
		if(!this.myArr) {
			this.myArr = [
				()=>{console.log(0);},
				()=>{console.log(1);},
				()=>{console.log(2);},
				()=>{console.log(3);},
				()=>{console.log(4);},
				()=>{console.log(5);},
				()=>{console.log(6);},
				()=>{console.log(7);},
				()=>{console.log(8);},
				()=>{console.log(9);},
				()=>{console.log(10);},
				()=>{console.log(11);},
				()=>{console.log(12);},
				()=>{console.log(13);},
				()=>{console.log(14);},
				()=>{console.log(15);},
				()=>{console.log(16);},
				()=>{console.log(17);},
				()=>{console.log(18);},
				()=>{console.log(19);},
				()=>{console.log(20);},
				()=>{console.log(21);},
				()=>{console.log(22);},
				()=>{console.log(23);},
				()=>{console.log(24);},
				()=>{console.log(25);},
				()=>{console.log(26);},
				()=>{console.log(27);},
				()=>{console.log(28);},
				()=>{console.log(29);},
				()=>{console.log(30);},
				()=>{console.log(31);},
				()=>{console.log(32);},
				()=>{console.log(33);},
				()=>{console.log(34);},
				()=>{console.log(35);},
				()=>{console.log(36);},
				()=>{console.log(37);},
				()=>{console.log(38);},
				()=>{console.log(39);},
				()=>{console.log(40);},
				()=>{console.log(41);},
				()=>{console.log(42);},
				()=>{console.log(43);},
				()=>{console.log(44);},
				()=>{console.log(45);},
				()=>{console.log(46);},
				()=>{console.log(47);},
				()=>{console.log(48);},
				()=>{console.log(49);},
				()=>{console.log(50);},
				()=>{console.log(51);},
				()=>{console.log(52);},
				()=>{console.log(53);},
				()=>{console.log(54);},
				()=>{console.log(55);},
				()=>{console.log(56);},
				()=>{console.log(57);},
				()=>{console.log(58);},
				()=>{console.log(59);},
				()=>{console.log(60);},
				()=>{console.log(61);},
				()=>{console.log(62);},
				()=>{console.log(63);},
				()=>{console.log(64);},
				()=>{console.log(65);},
				()=>{console.log(66);},
				()=>{console.log(67);},
				()=>{console.log(68);},
				()=>{console.log(69);},
				()=>{console.log(70);},
				()=>{console.log(71);},
				()=>{console.log(72);},
				()=>{console.log(73);},
				()=>{console.log(74);},
				()=>{console.log(75);},
				()=>{console.log(76);},
				()=>{console.log(77);},
				()=>{console.log(78);},
				()=>{console.log(79);},
				()=>{console.log(80);},
				()=>{console.log(81);},
				()=>{console.log(82);},
				()=>{console.log(83);},
				()=>{console.log(84);},
				()=>{console.log(85);},
				()=>{console.log(86);},
				()=>{console.log(87);},
				()=>{console.log(88);},
				()=>{console.log(89);},
				()=>{console.log(90);},
				()=>{console.log(91);},
				()=>{console.log(92);},
				()=>{console.log(93);},
				()=>{console.log(94);},
				()=>{console.log(95);},
				()=>{console.log(96);},
				()=>{console.log(97);},
				()=>{console.log(98);},
				()=>{console.log(99);}
			];
		}
		const nr = Math.floor(Math.random()*100);
		return this.myArr[nr];

	},

	t_switch: function () {
		
		if (!this.switch) {
			this.switch = function(x) {
				switch(x) {
					case 0:
						return ()=>{console.log(0);};
					case 1:
						return ()=>{console.log(1);};
					case 2:
						return ()=>{console.log(2);};
					case 3:
						return ()=>{console.log(3);};
					case 4:
						return ()=>{console.log(4);};
					case 5:
						return ()=>{console.log(5);};
					case 6:
						return ()=>{console.log(6);};
					case 7:
						return ()=>{console.log(7);};
					case 8:
						return ()=>{console.log(8);};
					case 9:
						return ()=>{console.log(9);};
					case 10:
						return ()=>{console.log(10);};
					case 11:
						return ()=>{console.log(11);};
					case 12:
						return ()=>{console.log(12);};
					case 13:
						return ()=>{console.log(13);};
					case 14:
						return ()=>{console.log(14);};
					case 15:
						return ()=>{console.log(15);};
					case 16:
						return ()=>{console.log(16);};
					case 17:
						return ()=>{console.log(17);};
					case 18:
						return ()=>{console.log(18);};
					case 19:
						return ()=>{console.log(19);};
					case 20:
						return ()=>{console.log(20);};
					case 21:
						return ()=>{console.log(21);};
					case 22:
						return ()=>{console.log(22);};
					case 23:
						return ()=>{console.log(23);};
					case 24:
						return ()=>{console.log(24);};
					case 25:
						return ()=>{console.log(25);};
					case 26:
						return ()=>{console.log(26);};
					case 27:
						return ()=>{console.log(27);};
					case 28:
						return ()=>{console.log(28);};
					case 29:
						return ()=>{console.log(29);};
					case 30:
						return ()=>{console.log(30);};
					case 31:
						return ()=>{console.log(31);};
					case 32:
						return ()=>{console.log(32);};
					case 33:
						return ()=>{console.log(33);};
					case 34:
						return ()=>{console.log(34);};
					case 35:
						return ()=>{console.log(35);};
					case 36:
						return ()=>{console.log(36);};
					case 37:
						return ()=>{console.log(37);};
					case 38:
						return ()=>{console.log(38);};
					case 39:
						return ()=>{console.log(39);};
					case 40:
						return ()=>{console.log(40);};
					case 41:
						return ()=>{console.log(41);};
					case 42:
						return ()=>{console.log(42);};
					case 43:
						return ()=>{console.log(43);};
					case 44:
						return ()=>{console.log(44);};
					case 45:
						return ()=>{console.log(45);};
					case 46:
						return ()=>{console.log(46);};
					case 47:
						return ()=>{console.log(47);};
					case 48:
						return ()=>{console.log(48);};
					case 49:
						return ()=>{console.log(49);};
					case 50:
						return ()=>{console.log(50);};
					case 51:
						return ()=>{console.log(51);};
					case 52:
						return ()=>{console.log(52);};
					case 53:
						return ()=>{console.log(53);};
					case 54:
						return ()=>{console.log(54);};
					case 55:
						return ()=>{console.log(55);};
					case 56:
						return ()=>{console.log(56);};
					case 57:
						return ()=>{console.log(57);};
					case 58:
						return ()=>{console.log(58);};
					case 59:
						return ()=>{console.log(59);};
					case 60:
						return ()=>{console.log(60);};
					case 61:
						return ()=>{console.log(61);};
					case 62:
						return ()=>{console.log(62);};
					case 63:
						return ()=>{console.log(63);};
					case 64:
						return ()=>{console.log(64);};
					case 65:
						return ()=>{console.log(65);};
					case 66:
						return ()=>{console.log(66);};
					case 67:
						return ()=>{console.log(67);};
					case 68:
						return ()=>{console.log(68);};
					case 69:
						return ()=>{console.log(69);};
					case 70:
						return ()=>{console.log(70);};
					case 71:
						return ()=>{console.log(71);};
					case 72:
						return ()=>{console.log(72);};
					case 73:
						return ()=>{console.log(73);};
					case 74:
						return ()=>{console.log(74);};
					case 75:
						return ()=>{console.log(75);};
					case 76:
						return ()=>{console.log(76);};
					case 77:
						return ()=>{console.log(77);};
					case 78:
						return ()=>{console.log(78);};
					case 79:
						return ()=>{console.log(79);};
					case 80:
						return ()=>{console.log(80);};
					case 81:
						return ()=>{console.log(81);};
					case 82:
						return ()=>{console.log(82);};
					case 83:
						return ()=>{console.log(83);};
					case 84:
						return ()=>{console.log(84);};
					case 85:
						return ()=>{console.log(85);};
					case 86:
						return ()=>{console.log(86);};
					case 87:
						return ()=>{console.log(87);};
					case 88:
						return ()=>{console.log(88);};
					case 89:
						return ()=>{console.log(89);};
					case 90:
						return ()=>{console.log(90);};
					case 91:
						return ()=>{console.log(91);};
					case 92:
						return ()=>{console.log(92);};
					case 93:
						return ()=>{console.log(93);};
					case 94:
						return ()=>{console.log(94);};
					case 95:
						return ()=>{console.log(95);};
					case 96:
						return ()=>{console.log(96);};
					case 97:
						return ()=>{console.log(97);};
					case 98:
						return ()=>{console.log(98);};
					case 99:
						return ()=>{console.log(99);};
					default:
						return undefined;
				}
			};
		}

		const nr = Math.floor(Math.random()*100);

		return this.switch(nr);

	},

	t_object: function () {
		if (!this.myObj) {
			this.myObj = {
				0: ()=>{console.log(0);},
				1: ()=>{console.log(1);},
				2: ()=>{console.log(2);},
				3: ()=>{console.log(3);},
				4: ()=>{console.log(4);},
				5: ()=>{console.log(5);},
				6: ()=>{console.log(6);},
				7: ()=>{console.log(7);},
				8: ()=>{console.log(8);},
				9: ()=>{console.log(9);},
				10: ()=>{console.log(10);},
				11: ()=>{console.log(11);},
				12: ()=>{console.log(12);},
				13: ()=>{console.log(13);},
				14: ()=>{console.log(14);},
				15: ()=>{console.log(15);},
				16: ()=>{console.log(16);},
				17: ()=>{console.log(17);},
				18: ()=>{console.log(18);},
				19: ()=>{console.log(19);},
				20: ()=>{console.log(20);},
				21: ()=>{console.log(21);},
				22: ()=>{console.log(22);},
				23: ()=>{console.log(23);},
				24: ()=>{console.log(24);},
				25: ()=>{console.log(25);},
				26: ()=>{console.log(26);},
				27: ()=>{console.log(27);},
				28: ()=>{console.log(28);},
				29: ()=>{console.log(29);},
				30: ()=>{console.log(30);},
				31: ()=>{console.log(31);},
				32: ()=>{console.log(32);},
				33: ()=>{console.log(33);},
				34: ()=>{console.log(34);},
				35: ()=>{console.log(35);},
				36: ()=>{console.log(36);},
				37: ()=>{console.log(37);},
				38: ()=>{console.log(38);},
				39: ()=>{console.log(39);},
				40: ()=>{console.log(40);},
				41: ()=>{console.log(41);},
				42: ()=>{console.log(42);},
				43: ()=>{console.log(43);},
				44: ()=>{console.log(44);},
				45: ()=>{console.log(45);},
				46: ()=>{console.log(46);},
				47: ()=>{console.log(47);},
				48: ()=>{console.log(48);},
				49: ()=>{console.log(49);},
				50: ()=>{console.log(50);},
				51: ()=>{console.log(51);},
				52: ()=>{console.log(52);},
				53: ()=>{console.log(53);},
				54: ()=>{console.log(54);},
				55: ()=>{console.log(55);},
				56: ()=>{console.log(56);},
				57: ()=>{console.log(57);},
				58: ()=>{console.log(58);},
				59: ()=>{console.log(59);},
				60: ()=>{console.log(60);},
				61: ()=>{console.log(61);},
				62: ()=>{console.log(62);},
				63: ()=>{console.log(63);},
				64: ()=>{console.log(64);},
				65: ()=>{console.log(65);},
				66: ()=>{console.log(66);},
				67: ()=>{console.log(67);},
				68: ()=>{console.log(68);},
				69: ()=>{console.log(69);},
				70: ()=>{console.log(70);},
				71: ()=>{console.log(71);},
				72: ()=>{console.log(72);},
				73: ()=>{console.log(73);},
				74: ()=>{console.log(74);},
				75: ()=>{console.log(75);},
				76: ()=>{console.log(76);},
				77: ()=>{console.log(77);},
				78: ()=>{console.log(78);},
				79: ()=>{console.log(79);},
				80: ()=>{console.log(80);},
				81: ()=>{console.log(81);},
				82: ()=>{console.log(82);},
				83: ()=>{console.log(83);},
				84: ()=>{console.log(84);},
				85: ()=>{console.log(85);},
				86: ()=>{console.log(86);},
				87: ()=>{console.log(87);},
				88: ()=>{console.log(88);},
				89: ()=>{console.log(89);},
				90: ()=>{console.log(90);},
				91: ()=>{console.log(91);},
				92: ()=>{console.log(92);},
				93: ()=>{console.log(93);},
				94: ()=>{console.log(94);},
				95: ()=>{console.log(95);},
				96: ()=>{console.log(96);},
				97: ()=>{console.log(97);},
				98: ()=>{console.log(98);},
				99: ()=>{console.log(99);}
			};
		}
		const nr = Math.floor(Math.random()*100);
		return this.myObj[nr];
	},

}