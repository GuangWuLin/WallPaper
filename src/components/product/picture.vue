<template>
    <pic :pictures='pictures'>
    </pic>
</template>
<script>
import Pic from 'components/about/honor'
export default {
    components: {
        Pic
    },
    props: ['pictures']
}
</script>
