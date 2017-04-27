import axios from 'axios';


module.exports = {
  uploadToSever:
    axios({
      method: 'post',
      url: '/upload',
      data: {
        title: 'How to bake a pie',
        author: 'Lisa',
        description:'Cooking video',
        dataType: 'webm',
        blob:'',
        topics:'cooking, pie'
      }
    });

}

uploadToSever();
