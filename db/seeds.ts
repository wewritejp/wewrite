import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */

const user_param = {
  data: {
    id: 'higakijin',
    name: "higakijin",
    email: "higakijin@example.com",
  },
}

const book_param = {
  data: {
    title: "戊辰戦争の舞台を現代地図で巡ろう",
    body: "戊辰戦争は、1868年に日本で起こった明治維新の一つの事件で、新政府軍と旧幕府軍との間で行われた戦争です。幕末の混乱期において、幕府が打倒され、新しい明治政府が誕生した中で起こりました。幕府軍は東北地方を中心に勢力を持ち、一方新政府軍は関東地方を中心に勢力を持ちました。戦争は、新政府軍の勝利に終わり、日本の中央政府が統一されました。この戦争は、日本の近代化の一つの契機となり、薩長土肥らの志士たちの活躍によって、西洋文化を取り入れた明治維新が進められることとなりました。",
    price: 1000,
    purpose: "現代日本から幕末を眺め、未来を描く。",
    content: `
      戊辰戦争は、江戸時代末期に起こった日本の歴史的な事件の一つであり、現在の日本の地図上でも重要な地域を舞台として展開されました。

      まず、戦争の勃発地となった会津地方は、現在の福島県会津地域に位置しています。会津地方は、幕末には奥羽越列藩同盟を形成する諸藩の中心地の一つであり、幕府軍の拠点として重要な役割を果たしていました。
      
      一方、新政府軍の拠点であった関東地方は、現在の東京都や神奈川県、千葉県などが含まれます。特に、新政府軍の総司令官であった徳川慶喜は、江戸城を拠点として戦争を指揮しました。
      
      また、戊辰戦争で激しい戦闘が繰り広げられた箱根山や越後湯沢、会津若松などの地名は、現代でも観光地として人気があります。これらの地域を巡ることで、戊辰戦争の歴史的な背景やその影響をより深く理解することができます。
      
      戊辰戦争は、明治維新の一つの契機となった事件であり、現代の日本の発展に大きな影響を与えた歴史的な事件です。その舞台となった地域を訪れることで、日本の歴史や文化をより深く理解することができます。
    `,
    note: `
      この書籍には戦争に関するテーマが含まれています
      また、内容には諸説あります。
    `,
    userId: 'higakijin'
  },
}

const seed = async () => {
  const user = await db.user.create(user_param)

  for (let i = 0; i < 10; i++) {
    const book = await db.book.create(book_param)
  }
}

export default seed
