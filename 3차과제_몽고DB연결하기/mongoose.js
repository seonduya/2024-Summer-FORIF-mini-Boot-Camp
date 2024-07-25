const mongoose = require('mongoose');

// 정확한 접속 문자열 사용
const MONGO_HOST = 'mongodb+srv://seond0112:Dw5486dwdw*@cluster0.yshfhdd.mongodb.net/sample_mflix?retryWrites=true&w=majority';

mongoose.connect(MONGO_HOST)
    .then(() => {
        console.log('MongoDB 연결 성공');
        
        // Cat 모델 정의
        const Cat = mongoose.model('Cat', { name: String });
        
        // 데이터 생성 및 저장
        const kitty = new Cat({ name: 'Zildjian' });

        kitty.save().then(data => {
            console.log('저장된 데이터');
            console.log(data);
        }).catch(err => {
            console.error('데이터 저장 오류:', err);
        });

        Cat.create({ name: '야옹이' }).then(data => {
            console.log('저장된 데이터');
            console.log(data);
        }).catch(err => {
            console.error('데이터 생성 오류:', err);
        });

        Cat.insertMany([
            { name: '나비' },
            { name: '부엉이' }
        ]).then(data => {
            console.log('저장된 데이터');
            console.log(data);
        }).catch(err => {
            console.error('데이터 삽입 오류:', err);
        });


        // 데이터 조회만 수행
        Cat.find().then((data) => {
        console.log('데이터 조회 성공:', data);

        // 연결 종료
        return mongoose.connection.close();
        }).then(() => {
            console.log('MongoDB 연결 종료');
        }).catch((err) => {
            console.error('오류 발생:', err);
        

    })
    .catch(err => {
        console.error('MongoDB 연결 오류:', err);
    });
});
