const mongoose = require('mongoose');

// 정확한 접속 문자열 사용
const MONGO_HOST = 'mongodb+srv://seond0112:Dw5486dwdw*@cluster0.yshfhdd.mongodb.net/todo?retryWrites=true&w=majority';

async function main() {
  try {
    await mongoose.connect(MONGO_HOST);
    console.log('MongoDB 연결 성공');

    const MovieSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true
      },
      director: {
        type: String,
        required: true
      },
      startDate: {
        type: Date
      },
      thumbnail: {
        type: String,
        unique: true
      },
      story: {
        type: String
      }
    }, {
      timestamps: true
    });

    const Movies = mongoose.model('Movie', MovieSchema);

    const newMovie = await Movie.create({
      title: "공조",
      director: "홍길동",
      startDate: "2017-02-16",
      thumbnail: "abc",
      story: "비밀리",
      tag: [2017, "액션"]
    });

    console.log('새로 저장된 데이터:', newMovie);
    console.log('조회된 데이터:', Movies);

    const ReviewSchema = new mongoose.Schema({
        writer:{
            type:String,
            required:true,
        },
        movie:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            default:''
        }
    })
    const Review = mongoose.model('Review',ReviewSchema);

    Review.find({writer:"신윤수"}).then(review=>{
        console.log(review);
    })

    Review.find({writer:"신윤수"}).populate('movie').then(review=>{
        console.log(review)
    })

    // 연결 종료
    await mongoose.connection.close();
    console.log('MongoDB 연결 종료');

  } catch (err) {
    console.error('오류 발생:', err);
  }
}

main();