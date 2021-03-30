var app = new Vue ({
  el: "#root",
    data: {
      indexChat: 0,
      inputTxt: "",
      inputSearch: "",
      indexMsg: -1,
      visible: false,
      contacts: [
      	{
      		name: 'Michele',
      		avatar: '_1',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Fabio',
      		avatar: '_2',
      		visible: true,
      		messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
      	},
      	{
      		name: 'Samuele',
      		avatar: '_7',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Luisa',
      		avatar: '_6',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
      	},
      ]
    },
  methods: {
    cambiaConv: function (i) {
      this.indexChat = i;
      console.log(this.cambiaConv);
    },
    sendMsg: function () {
      const indexBox = this.indexChat;
      let obj = {
        text: this.inputTxt,
        status:"sent",
        date: dayjs().format('hh:mm')
      }
      this.contacts[indexBox].messages.push(obj);
      this.inputTxt = ""
      setTimeout(() => {
        let obj2 = {
          text: "Va bene!",
          status:"received",
          date: dayjs().format('hh:mm')
        }
          this.contacts[indexBox].messages.push(obj2);
      }, 3000);
    },
    openMenu: function (i){
      this.indexMsg = i;
      this.visible = !this.visible
      console.log(this.visible);
    },
    deleteMsg: function (i){
      this.indexMsg = i;
      this.contacts[this.indexChat].messages.splice(i, 1);
      this.indexMsg = -1;
    }
  },
})
