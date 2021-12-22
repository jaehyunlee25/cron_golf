import cron from 'node-cron';
import axios from 'axios';

const log = console.log;


const every5seconds = '*/5 * * * * *';
/* cron.schedule(every5seconds, function () {
  log('매 5초 마다 작업 실행 :', new Date().toString());
}); */

cron.schedule('0 0 3 * * *', function () {
  log('매일 새벽 3시 마다 작업 실행 :', new Date().toString());
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


