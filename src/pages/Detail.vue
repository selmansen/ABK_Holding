<template>
	<div class="detail">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(news,index) in newss" :key="index"> 
					<div v-if="proId == news.newsId">
						<h1>{{news.newsTitle}}</h1>
						<img :src="news.image" class="img-fluid">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
    name:'detail',
    data(){
        return{
            proId:this.$route.params.Pid,
            title:"Detail",
            newss:[
            {
            newsTitle:"1 Counsel of protection: The coming revolution in insurance",
            image       : require('../assets/img/news-big.jpg'),
            newsId:1
            },
            {
            newsTitle:"2 of protection: The coming revolution in insurance",
            image       : require('../assets/img/news-big.jpg'),
            newsId:2
            },
            {
            newsTitle:"3 Counsel of protection: The coming revolution in insurance",
            image       : require('../assets/img/news-big.jpg'),
            newsId:3
            }
            ]
        }
    }
}
</script>