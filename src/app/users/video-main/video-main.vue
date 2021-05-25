<template>
  <div>
    video main run
    <div class="video-main">
      <!-- <video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed> -->
      <!-- <video-embed src="https://vimeo.com/370293725"></video-embed> -->

         <label class="custom-file-upload">
        upload videos
        </label>
          <input
            type="file"
            @change="onVideoSelected($event)"
            accept="video/*"
          />
      <p>dyntube</p>
      <div data-dyntube-key="0X02pYCJo0meJ40VkgERw"></div>
     
    </div>
  </div>
</template>

<script>
import appService from "../../services/app-service";

export default {
  name: "app-video-main",
  data() {
    return {
      video,
    };
  },
  methods: {
    async uploadVideo() {
       let fd = new FormData();
      fd.append("file", this.selectedVid, this.selectedVid.name);
      let uploadedVid = await appService.uploadVideoToServer(fd);
      console.log("uploadedVid: ", uploadedVid)
    },
      async onVideoSelected(event) {
      this.selectedVid = event.target.files[0];
      this.uploadVideo();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
