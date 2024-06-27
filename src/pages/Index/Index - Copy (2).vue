<template>
    <div class="main_div ease-in-outs z-[1] relative bg-white">
        <div class="ease-in-out flex flex-col justify-end h-full relative">
            <div class="mainbox_height py-[30px] xxl:py-[60px]">
                <div v-if="!messageSent" class="">
                    <div>
                        <div class="w-[76px] h-[76px] flex justify-center items-center border border-solid border-[#D2DDEB] rounded-full m-auto">
                            <img src="/src/assets/images/black-logo.svg" alt="black-logo" />
                        </div>
                        <h1 class="Pattanakarn-Medium xl:text-[26px] xxl:text-[34px] font-medium text-[#070707] text-center pt-[10px] xxl:pt-[16px] pb-[40px] xxl:pb-[83px]">How can I help you today?</h1>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 pb-[20px] px-[20px] sm:px-[40px] xl:px-[102px] xxl:px-[141px]">
                        <div class="p-[4px] xl:p-[8px] xxl:p-[12px]">
                            <RouterLink :to="{ name: 'Index' }" class="bg-[#EFF4FB] rounded-[12px] py-[17px] px-[20px] flex items-center">
                                <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fff]">
                                    <img src="/src/assets/images/boxcheck.svg" alt="box-check" />
                                </div>
                                <div class="pl-[15px]">
                                    <h2 class="Pattanakarn-Medium text-[12px] lg:text-[14px] xxl:text-[16px] font-medium text-[#070707] pb-[4px]">Tell me a fun fact</h2>
                                    <p class="Pattanakarn-Regular text-[11px] lg:text-[13px] text-[#444746]">about the Roman Empire</p>
                                </div>
                            </RouterLink>
                        </div>
                        <div class="p-[4px] xl:p-[8px] xxl:p-[12px]">
                            <RouterLink :to="{ name: 'Index' }" class="bg-[#EFF4FB] rounded-[12px] py-[17px] px-[20px] flex items-center">
                                <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fff]">
                                    <img src="/src/assets/images/box.svg" alt="box" />
                                </div>
                                <div class="pl-[15px]">
                                    <h2 class="Pattanakarn-Medium text-[12px] lg:text-[14px] xxl:text-[16px] font-medium text-[#070707] pb-[4px]">Make me a personal webpage</h2>
                                    <p class="Pattanakarn-Regular text-[11px] lg:text-[13px] text-[#444746]">after asking me three questions</p>
                                </div>
                            </RouterLink>
                        </div>
                        <div class="p-[4px] xl:p-[8px] xxl:p-[12px]">
                            <RouterLink :to="{ name: 'Index' }" class="bg-[#EFF4FB] rounded-[12px] py-[17px] px-[20px] flex items-center">
                                <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fff]">
                                    <img src="/src/assets/images/box-pen.svg" alt="box-pen" />
                                </div>
                                <div class="pl-[15px]">
                                    <h2 class="Pattanakarn-Medium text-[12px] lg:text-[14px] xxl:text-[16px] font-medium text-[#070707] pb-[4px]">Write a text</h2>
                                    <p class="Pattanakarn-Regular text-[11px] lg:text-[13px] text-[#444746]">inviting my neighbors to a barbecue</p>
                                </div>
                            </RouterLink>
                        </div>
                        <div class="p-[4px] xl:p-[8px] xxl:p-[12px]">
                            <RouterLink :to="{ name: 'Index' }" class="bg-[#EFF4FB] rounded-[12px] py-[17px] px-[20px] flex items-center">
                                <div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fff]">
                                    <img src="/src/assets/images/light.svg" alt="light" />
                                </div>
                                <div class="pl-[15px]">
                                    <h2 class="Pattanakarn-Medium text-[12px] lg:text-[14px] xxl:text-[16px] font-medium text-[#070707] pb-[4px]">Test my knowledge</h2>
                                    <p class="Pattanakarn-Regular text-[11px] lg:text-[13px] text-[#444746]">on ancient civilizations</p>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div v-else class="xl:py-[30px] xxl:py-[60px] px-[20px] sm:px-[40px] xl:px-[102px] xxl:px-[141px]">
                    <div class="chat_list_right text-right w-full max-w-[90%] md:max-w-[70%] ml-auto pb-[20px] md:pb-[30px] lg:pb-[40px] xl:pb-[60px]">
                        <p class="Pattanakarn-Regular text-[14px] text-[#000] bg-[#EFF4FB] rounded-[6px] lg:rounded-[20px] px-[27px] py-[16px] inline-block text-left">{{ message }}</p>
                    </div>
                    <div class="chat_list_left w-full max-w-[90%] md:max-w-[70%] flex pb-[20px] md:pb-[30px] lg:pb-[40px] xl:pb-[60px]">
                        <div class="w-[58px] h-[58px] border border-solid border-[#D2DDEB] rounded-full flex justify-center items-center">
                            <img src="/src/assets/images/black-logo.svg" alt="logo">
                        </div>
                        <div class="pl-[10px] md:pl-[22px] text_width">
                            <p class="Pattanakarn-Regular text-[14px] text-[#000] leading-[25px] pb-[4px]">{{ message }}</p>
                            <button @click="copyMessage">
                                <img src="/src/assets/images/copy-icon.svg" alt="copy">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-[20px] sm:px-[40px] xl:px-[110px] xxl:px-[153px] pb-[20px] xxl:pb-[60px] w-full relative">
                <div class="relative input_custome rounded-[26px] flex justify-end border border-solid border-[#D2DDEB]">
                    <div class="w-full max-w-[50px] flex justify-center items-center" ref="dropdown1">
                        <button @click="toggleDropdown1">
                            <img src="/src/assets/images/links.svg" alt="links" />
                        </button>
                        <div v-if="isDropdownOpen1" @click.self="closeDropdown1" class="absolute z-[9] left-0 bottom-[100%] border border-solid border-[#DADADA] w-full max-w-[250px] bg-[#fff] rounded-[6px]">
                            <div class="p-[6px]">
                                <button class="flex items-center p-[8px]">
                                    <span class="pr-[10px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-5 w-5 shrink-0"><path fill="currentColor" fill-rule="evenodd" d="M18.032 5.024C17.75 5 17.377 5 16.8 5h-5.3c-.2 1-.401 1.911-.61 2.854-.131.596-.247 1.119-.523 1.56a3 3 0 0 1-.953.954c-.441.275-.964.39-1.56.522l-.125.028-2.512.558A1 1 0 0 1 5 11.5v5.3c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C6.25 19 6.623 19 7.2 19H10a1 1 0 1 1 0 2H7.161c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A18 18 0 0 1 3 16.838V11c0-2.075 1.028-4.067 2.48-5.52C6.933 4.028 8.925 3 11 3h5.839c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356V10a1 1 0 1 1-2 0V7.2c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085M5.28 9.414l2.015-.448c.794-.177.948-.225 1.059-.294a1 1 0 0 0 .318-.318c.069-.11.117-.265.294-1.059l.447-2.015c-.903.313-1.778.874-2.518 1.615-.741.74-1.302 1.615-1.615 2.518M17 15a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2z" clip-rule="evenodd"></path></svg>
                                    </span>
                                    <label for="file-upload" class="custom-file-upload Pattanakarn-Regular text-[14px] text-[#000] cursor-pointer">
                                        Choose File
                                    </label>
                                    <input id="file-upload" type="file" class="hidden Pattanakarn-Regular text-[14px] text-[#000]"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <textarea 
                        v-model="text" 
                        placeholder="Enter a prompt here" 
                        class="textarea-custom placeholder:text-[#77818F] relative Pattanakarn-Medium w-full leading-normal text-[13px] font-medium text-[#77818F] pl-[0px] pt-[17px] pr-[10px] bg-[#fff] resize-none overflow-y-hidden border-none" 
                        @input="resizeTextarea" 
                        @keydown.enter.prevent="sendMessage" 
                        @focus="handleFocus" 
                        @blur="handleBlur"
                        ref="textarea"
                    ></textarea>
                    <button type="submit" class="w-[55px] flex justify-center items-center" @click="sendMessage">
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
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                text: '',
                message: '',
                messageSent: false,
                isActive: false,
                isDropdownOpen1: false,
            };
        },
        methods: {
            resizeTextarea() {
                const textarea = this.$refs.textarea;
                textarea.style.height = '50px';
                textarea.classList.add('auto-overflows');
                const scrollHeight = textarea.scrollHeight;
                if (scrollHeight <= 180) {
                    textarea.style.height = `${scrollHeight}px`;
                    textarea.classList.remove('auto-overflow');
                } else {
                    textarea.style.height = '180px';
                    textarea.classList.add('auto-overflow');
                }
            },

            resizeTextarea() {
                const textarea = this.$refs.textarea;
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            },
            sendMessage() {
                if (this.text.trim()) {
                    this.message = this.text;
                    this.messageSent = true;
                    this.text = '';
                }
            },
            copyMessage() {
                navigator.clipboard.writeText(this.message).then(() => {
                    // alert('Message copied to clipboard');
                }).catch(err => {
                    console.error('Could not copy text: ', err);
                });
            },

            toggleDropdown1() {
                this.isDropdownOpen1 = !this.isDropdownOpen1;
            },
            closeDropdown1() {
                this.isDropdownOpen1 = false;
            },
            handleClickOutside(event) {
                const dropdown1 = this.$refs.dropdown1;
                if (!dropdown1.contains(event.target)) {
                    this.isDropdownOpen1 = false;
                }
            },
            handleListItemClick1() {
                this.isDropdownOpen1 = false;
            },
            toggleClass() {
                document.body.classList.toggle('active');
            },
        
        },
        mounted() {
            document.addEventListener('click', this.handleClickOutside);
        },
        beforeDestroy() {
            document.removeEventListener('click', this.handleClickOutside);
        },
        destroyed() {
            document.removeEventListener('click', this.closeDropdownOnOutsideClick);
        }
    }
</script>