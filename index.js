import cron from 'node-cron';
import axios from 'axios';

const log = console.log;


const every5seconds = '*/5 * * * * *';
cron.schedule(every5seconds, function () {
  const now = new Date();
  now.setHours(now.getHours() +9);  //set 'Asia/Seoul'
  log('매 5초 마다 작업 실행 :', now.toString());
});

cron.schedule('0 0 * * * *', function () {
  const now = new Date();
  now.setHours(now.getHours() +9);  //set 'Asia/Seoul'
  log('매 1시간 마다 작업 실행 :', now.toString());
  deletePastStatus();
});

function deletePastStatus() {
  axios({
    method: 'post',
    url: 'http://golf.mnemosyne.co.kr:1006/api/reservation/delPast',
    data: {}
  }).then((resp) => {
    log(resp.data);
  });
};


