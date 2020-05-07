<template>
	<div class="detail pb-lg-20 pb-10">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(news,index) in newss" :key="index"> 
					<div v-if="proId == news.newsId">
                        <img :src="news.image" class="img-fluid">
						<h1 class="mt-lg-10 mt-6 text-secondary">{{news.newsTitle}}</h1>
                        <div class="mt-3" v-html="news.newsContent"></div>
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
                newsTitle:"COVID-19: We are stronger together!",
                newsContent:`<p>As the world faces the fitness and financial results of COVID-19, ABK Holding is running to bring the overall pressure of our core business and expertise to aid our communities, employees, clients and people from all around the globe suffering from this unprecedented worldwide crisis.</p>`,
                image       : require('../assets/img/banner-1.jpg'),
                newsId:"covid19-we-are-stronger"
            },
            {
            newsTitle:"Challenge on the road!",
            newsContent:`<p>ABK Holding managers attempted to Classical Automobile Rally in Anatolia. By representing the heritage of the classical era of the car industry, we loved the enthusiasm of keeping the challenge on driving though conditions which is a result of sharing the stress on our cars.</p>`,
            image       : require('../assets/img/banner-2.jpg'),
            newsId:"challenge-on-the-road"
            },
            {
            newsTitle:"Challenge on the Circuit!",
            newsContent:`<p>ABK is supporting traffic act for a woman's existence on the road! </p>
            <p>Pembe pist, which is a non-governmental support act for defending women to be blamed as careless and bad drivers on the road is supported by the pembepist racing event.</p>
            <p>The very well known bloggers, influencers and famous women in Turkey raced with each other on the İstanbul grand prix circuit together.</p>`,
            image       : require('../assets/img/banner-3.jpg'),
            newsId:"challenge-on-the-circuit"
            },
            {
            newsTitle:"Icrypex and Wamo sponsors ADUS MOTORSPORTS Rally Team at Turkish Rally Championship!",
            newsContent:`<p>For 2020 Turkish Rally Championship, Icrypex and WAMO sponsored the most bright Rally team of the championship. We think we share the same feelings on challenging at hard conditions, managing stress and creating strategies that gets our customers, stake holders and colleagues to the target.</p>`,
            image       : require('../assets/img/banner-4.jpg'),
            newsId:"icrypex-and-wamo-sponsors-adus"
            }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .detail{
        padding-top:165px;
        @media screen and(max-width:991px){
            padding-top:102px;
        }
    }
</style>