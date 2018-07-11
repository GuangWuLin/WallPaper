<template>
    <pic :pictures='pictures'>
    </pic>
</template>
<script>
import Pic from 'base/pictureModal'
export default {
    components: {
        Pic
    },
    props: ['pictures']
}
</script>
