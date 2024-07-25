const mongoose = require('mongoose');

// 정확한 접속 문자열 사용
const MONGO_HOST = 'mongodb+srv://seond0112:Dw5486dwdw*@cluster0.yshfhdd.mongodb.net/todo?retryWrites=true&w=majority';

async function main() {
  try {
    await mongoose.connect(MONGO_HOST);
    console.log('MongoDB 연결 성공');

    const TodoSchema = new mongoose.Schema({
      content: {
        type: String,
        required: true
      },
      checked: {
        type: String,
        required: true
      }
    }, {
      timestamps: true
    });

    const Item = mongoose.model('Item', TodoSchema);

    const newItem = await Item.create({
      content:"hi",
      checked:"yes",
      tag: [2017, "액션"]
    });

    console.log('새로 저장된 데이터:', Item);

    // 연결 종료
    await mongoose.connection.close();
    console.log('MongoDB 연결 종료');

  } catch (err) {
    console.error('오류 발생:', err);
  }
}

main();