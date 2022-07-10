<script>
export default {
  props: {
    welcomeMessage: { type: String, default: 'Thank you for visiting' },
    userHostName: { type: String, default: '7 Spices Restaurant & Lounge' },
    opencloseTime: { type: String, default: '06:00 AM - 12:00 PM' },
    userLocation: { type: String, default: '610 Lincoln Rd, Miami Beach, FL' },
    userPhoneNumber: { type: String, default: '+1 305-397-8402' },
  },
}
</script>
<template>
  <div class="text-center uppercase">
    <p class="text-base text-gray-900">{{ welcomeMessage }}</p>
    <p class="text-3xl font-bold">{{ userHostName }}</p>
    <div
      class="mt-4 flex-1 items-center justify-center space-y-2 md:mt-2 md:flex md:space-y-0 lg:mt-2 lg:flex lg:space-y-0 xl:mt-2 xl:flex xl:space-y-0"
    >
      <p class="text-sm text-gray-900">
        <a href="#">{{ opencloseTime }}</a>
      </p>
      <p class="mx-4 text-sm text-gray-900">
        <a href="#">{{ userLocation }}</a>
      </p>
      <p class="text-sm text-gray-900">
        <a href="#">{{ userPhoneNumber }}</a>
      </p>
    </div>
  </div>
</template>
