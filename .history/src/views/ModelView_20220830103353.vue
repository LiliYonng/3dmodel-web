<template lang="">
    <div class='model-view'>
    <CommonHeader/>
        <div class="container">
            
        </div>
    </div>
</template>
		<script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>

		<script type="importmap">
			{
				"imports": {
					"three": "./js/three.module.js"
				}
			}
		</script>
<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import modelInit from '../js/model.js'
export default {
    components:{
        CommonAside,
        CommonHeader
    },
    mounter(){
        modelInit();
    }
}
</script>
<style lang="">
    
</style>