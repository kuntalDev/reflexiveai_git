<template>
    <div class="ease-in-out flex flex-col justify-end h-full relative">
        <div class="xl:pb-[137px] xxl:pb-[180px]">
            <div>
                <div class="w-[76px] h-[76px] flex justify-center items-center border border-solid border-[#D2DDEB] rounded-full m-auto">
                    <img src="/src/assets/images/black-logo.svg" alt="black-logo" />
                </div>
                <h1 class="Pattanakarn-Medium xl:text-[26px] xxl:text-[34px] font-medium text-[#070707] text-center xl:pt-[10px] xxl:pt-[16px] xl:pb-[40px] xxl:pb-[83px]">How can I help you today?</h1>
            </div>
            <div class="grid grid-cols-2 xl:px-[102px] xxl:px-[141px]">
                <div class="xl:p-[8px] xxl:p-[12px]">
                    <div class="bg-[#EFF4FB] rounded-[12px] py-[17px] px-[20px] flex items-center">
                        <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fff]">
                            <img src="/src/assets/images/boxcheck.svg" alt="box-check" />
                        </div>
                        <div class="pl-[15px]">
                            <h2 class="Pattanakarn-Medium xl:text-[14px] xxl:text-[16px] font-medium text-[#070707] pb-[4px]">Tell me a fun fact</h2>
                            <p class="Pattanakarn-Regular text-[13px] text-[#444746]">about the Roman Empire</p>
                        </div>
                    </div>
                </div>
                <div class="xl:p-[8px] xxl:p-[12px]">
                    <div class="bg-[#EFF4FB] rounded-[12px] py-[17px] px-[20px] flex items-center">
                        <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fff]">
                            <img src="/src/assets/images/boxcheck.svg" alt="box-check" />
                        </div>
                        <div class="pl-[15px]">
                            <h2 class="Pattanakarn-Medium xl:text-[14px] xxl:text-[16px] font-medium text-[#070707] pb-[4px]">Tell me a fun fact</h2>
                            <p class="Pattanakarn-Regular text-[13px] text-[#444746]">about the Roman Empire</p>
                        </div>
                    </div>
                </div>
                <div class="xl:p-[8px] xxl:p-[12px]">
                    <div class="bg-[#EFF4FB] rounded-[12px] py-[17px] px-[20px] flex items-center">
                        <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fff]">
                            <img src="/src/assets/images/boxcheck.svg" alt="box-check" />
                        </div>
                        <div class="pl-[15px]">
                            <h2 class="Pattanakarn-Medium xl:text-[14px] xxl:text-[16px] font-medium text-[#070707] pb-[4px]">Tell me a fun fact</h2>
                            <p class="Pattanakarn-Regular text-[13px] text-[#444746]">about the Roman Empire</p>
                        </div>
                    </div>
                </div>
                <div class="xl:p-[8px] xxl:p-[12px]">
                    <div class="bg-[#EFF4FB] rounded-[12px] py-[17px] px-[20px] flex items-center">
                        <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fff]">
                            <img src="/src/assets/images/boxcheck.svg" alt="box-check" />
                        </div>
                        <div class="pl-[15px]">
                            <h2 class="Pattanakarn-Medium xl:text-[14px] xxl:text-[16px] font-medium text-[#070707] pb-[4px]">Tell me a fun fact</h2>
                            <p class="Pattanakarn-Regular text-[13px] text-[#444746]">about the Roman Empire</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:px-[110px] xxl:px-[153px] xl:py-[40px] xxl:py-[70px] absolute bottom-0 w-full">
            <div class="relative input_custome overflow-hidden" :class="{ 'active': isActive }">
                <button class="hide_button absolute top-[14px] left-[20px] z-[1]">
                    <img src="/src/assets/images/links.svg" alt="links" />
                </button>
                <textarea type="text" placeholder="Enter a prompt here" class="placeholder:text-[#77818F] relative Pattanakarn-Medium w-full h-[50px] leading-normal text-[13px] font-medium text-[#77818F] pl-[50px] py-[15px] pr-[50px] bg-[#fff] resize-none border border-solid border-[#D2DDEB] rounded-full overflow-y-hidden" @focus="handleFocus" @blur="handleBlur"></textarea>
                <button type="submit" class="hide_button absolute top-[6px] right-[7px]">
                    <img src="/src/assets/images/backgroundArrow.svg" alt="backgroundArrow" />
                </button>
                <div class="send_btn absolute m-auto right-0 left-0 bottom-[3px] bg-[#fff] w-[99%] border-b-[1px] border-solid border-[#D2DDEB]">
                    <div class="flex justify-end items-center py-[10px]">
                        <button class="mr-[20px]">
                            <img src="/src/assets/images/image.svg" alt="image" />
                        </button>
                        <button class="mr-[20px]">
                            <img src="/src/assets/images/cut.svg" alt="cut" />
                        </button>
                        <button class="mr-[20px] border-l-[2px] pl-[20px] border-solid border-[#D2DDEB]">
                            <img src="/src/assets/images/mic.svg" alt="mic" />
                        </button>
                        <button class="mr-[16px]">
                            <img src="/src/assets/images/send1.svg" alt="send1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
            isActive: false,
            };
        },
        methods: {
            handleFocus() {
            this.isActive = true;
            },
            handleBlur() {
            this.isActive = false;
            },
        },
    }
</script>