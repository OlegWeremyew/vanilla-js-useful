import {upload} from './upload'

upload('#file', {
  multi: true,
  accept: [".png", ".jpg", ".gif"],
  onUpload(files){
    console.log('files', files)
  },
})