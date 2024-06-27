<template>
    <div class="h-screen w-full top-0 left-0 right-0 bottom-0 bg-[#fff] relative">
        <div class="w-full h-full overflow-y-auto login_height py-[100px] px-[10px]">
            <div class="bg-[#EFF4FB] w-full max-w-[510px] rounded-[12px] relative px-[20px] md:px-[47px] pb-[60px] md:pb-[86px] flex flex-col m-auto">
                <div class="relative mt-[-60px]">
                    <div class="w-[90px] md:w-[120px] h-[90px] md:h-[120px] flex justify-center items-center border border-solid border-[#D2DDEB] rounded-full m-auto bg-[#fff]">
                        <img src="/src/assets/images/login-logo.svg" alt="login-logo" class="w-[50px] md:w-auto h-[50px] md:h-auto" />
                    </div>
                </div>
                <div class="pt-[20px] pb-[20px] md:pb-[45px]">
                    <h2 class="Pattanakarn-Medium font-medium text-[#070707] text-center text-[26px] md:text-[37px]">Sign Up</h2>
                </div>
                <form>
                    <div class="relative pb-[19px]">
                        <img src="/src/assets/images/login-people.svg" alt="login-people" class="absolute top-[16px] left-[20px] z-[1]" />
                        <input type="text" placeholder="User name" class="relative bg-[#FFFFFF] border border-solid border-[#CECECE] rounded-[10px] Pattanakarn-Medium font-medium text-[#77818F] text-[13px] pl-[53px] pr-[15px] w-full h-[50px]">
                    </div>
                    <div class="relative pb-[19px]">
                        <img src="/src/assets/images/login-email.svg" alt="login-email" class="absolute top-[16px] left-[20px] z-[1]" />
                        <input type="text" placeholder="Email Address" class="relative bg-[#FFFFFF] border border-solid border-[#CECECE] rounded-[10px] Pattanakarn-Medium font-medium text-[#77818F] text-[13px] pl-[53px] pr-[15px] w-full h-[50px]">
                    </div>
                    <div class="relative pb-[19px]">
                        <img src="/src/assets/images/login-password.svg" alt="login-password" class="absolute top-[16px] left-[20px] z-[1]" />
                        <input type="text" placeholder="Password" class="relative bg-[#FFFFFF] border border-solid border-[#CECECE] rounded-[10px] Pattanakarn-Medium font-medium text-[#77818F] text-[13px] pl-[53px] pr-[15px] w-full h-[50px]">
                    </div>
                    <div class="relative pb-[19px]">
                        <img src="/src/assets/images/login-password.svg" alt="login-password" class="absolute top-[16px] left-[20px] z-[1]" />
                        <input type="text" placeholder="Confirm Password" class="relative bg-[#FFFFFF] border border-solid border-[#CECECE] rounded-[10px] Pattanakarn-Medium font-medium text-[#77818F] text-[13px] pl-[53px] pr-[15px] w-full h-[50px]">
                    </div>
                    <div class="relative pb-[26px]">
                        <button class="Pattanakarn-Medium font-medium text-[#fff] text-[15px] md:text-[20px] w-full rounded-[12px] flex justify-center items-center py-[11px] md:py-[15px] bg-black">
                            Register
                            <img src="/src/assets/images/login-arrow.svg" alt="login-arrow" class="ml-[9px]" />
                        </button>
                    </div>
                </form>
                <div class="pb-[10px]">
                    <p class="Pattanakarn-Medium text-[#444746] text-center text-[13px]">
                        Don't have an account? 
                        <RouterLink to="/" class="text-[#000] underline">
                            Log In
                        </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
    }
</script>