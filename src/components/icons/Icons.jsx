// import React from 'react';

// function VideoIcon({ fillColor }) {
//   return (
//     <svg width="25" height="21" viewBox="0 0 20 16"  xmlns="http://www.w3.org/2000/svg">
//       <path fill={fillColor} fillRule="evenodd" clipRule="evenodd" d="M2.99768 1.20037C2.00357 1.20037 1.19768 2.00625 1.19768 3.00036V12.9996C1.19768 13.9937 2.00357 14.7996 2.99768 14.7996H12.9288C13.9229 14.7996 14.7288 13.9937 14.7288 12.9996V10.5C14.7288 10.2656 14.8653 10.0526 15.0784 9.95477C15.2914 9.85693 15.5419 9.89214 15.7198 10.0449L18.1418 12.1259C18.4012 12.3487 18.8025 12.1644 18.8025 11.8225V4.17759C18.8025 3.83563 18.4012 3.65134 18.1418 3.87419L15.7198 5.95512C15.5419 6.1079 15.2914 6.14312 15.0784 6.04528C14.8653 5.94744 14.7288 5.73447 14.7288 5.50002V3.00037C14.7288 2.00625 13.9229 1.20037 12.9288 1.20037H2.99768ZM-0.00231934 3.00036C-0.00231934 1.34351 1.34083 0.000366211 2.99768 0.000366211H12.9288C14.5856 0.000366211 15.9288 1.34351 15.9288 3.00037V4.19348L17.3598 2.964C18.3973 2.07261 20.0025 2.80975 20.0025 4.17759V11.8225C20.0025 13.1903 18.3973 13.9274 17.3598 13.0361L15.9288 11.8066V12.9996C15.9288 14.6565 14.5856 15.9996 12.9288 15.9996H2.99768C1.34083 15.9996 -0.00231934 14.6565 -0.00231934 12.9996V3.00036Z" />
//     </svg>
//   );
// }

// export default VideoIcon ;

import React from 'react';

class Icons extends React.Component {
  render() {
    const { type, fillColor, size } = this.props;
    let iconSvg;

    switch (type) {
      case 'video':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
            <path fill={fillColor} fillRule="evenodd" clipRule="evenodd" d="M2.99768 1.20037C2.00357 1.20037 1.19768 2.00625 1.19768 3.00036V12.9996C1.19768 13.9937 2.00357 14.7996 2.99768 14.7996H12.9288C13.9229 14.7996 14.7288 13.9937 14.7288 12.9996V10.5C14.7288 10.2656 14.8653 10.0526 15.0784 9.95477C15.2914 9.85693 15.5419 9.89214 15.7198 10.0449L18.1418 12.1259C18.4012 12.3487 18.8025 12.1644 18.8025 11.8225V4.17759C18.8025 3.83563 18.4012 3.65134 18.1418 3.87419L15.7198 5.95512C15.5419 6.1079 15.2914 6.14312 15.0784 6.04528C14.8653 5.94744 14.7288 5.73447 14.7288 5.50002V3.00037C14.7288 2.00625 13.9229 1.20037 12.9288 1.20037H2.99768ZM-0.00231934 3.00036C-0.00231934 1.34351 1.34083 0.000366211 2.99768 0.000366211H12.9288C14.5856 0.000366211 15.9288 1.34351 15.9288 3.00037V4.19348L17.3598 2.964C18.3973 2.07261 20.0025 2.80975 20.0025 4.17759V11.8225C20.0025 13.1903 18.3973 13.9274 17.3598 13.0361L15.9288 11.8066V12.9996C15.9288 14.6565 14.5856 15.9996 12.9288 15.9996H2.99768C1.34083 15.9996 -0.00231934 14.6565 -0.00231934 12.9996V3.00036Z" />
          </svg>
        );
        break;
      case 'audioCall':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5301 3.78C20.5501 3.84 20.5601 3.89 20.5601 3.95V4V8.65C20.5601 8.96 20.3101 9.21 20.0001 9.21C19.6901 9.21 19.4401 8.96 19.4401 8.65V5.36L14.4201 10.38C14.3101 10.5 14.1701 10.55 14.0201 10.55C13.8701 10.55 13.7301 10.49 13.6201 10.38C13.4001 10.16 13.4001 9.8 13.6201 9.58L18.6401 4.56H15.3401C15.0301 4.56 14.7801 4.31 14.7801 4C14.7801 3.69 15.0301 3.44 15.3401 3.44H20.0001C20.0701 3.44 20.1501 3.45 20.2301 3.47C20.279 3.4863 20.3146 3.51589 20.3532 3.54794C20.3619 3.55521 20.3708 3.56261 20.3801 3.57C20.3851 3.575 20.3901 3.5775 20.3951 3.58C20.4001 3.5825 20.4051 3.585 20.4101 3.59C20.4101 3.6 20.4201 3.61 20.4201 3.61C20.4601 3.66 20.5001 3.72 20.5301 3.78ZM9.74005 18.76C12.02 20.34 14.39 21.14 16.78 21.14C17.59 21.14 18.3601 20.82 18.9401 20.24C19.57 19.61 20.06 18.43 20.06 17.54V16.89C20.06 16.12 19.6301 15.41 18.9501 15.04L15.7 13.29C15.13 12.98 14.44 12.97 13.86 13.26L13.34 13.52C13.11 13.64 12.9 13.79 12.71 13.98L12.27 14.43C11.87 14.24 11.27 13.88 10.67 13.28C10.06 12.68 9.71005 12.08 9.52005 11.68L9.96005 11.24C10.15 11.06 10.3 10.85 10.42 10.61L10.68 10.09C10.97 9.51002 10.96 8.82002 10.65 8.25002L8.90005 5.00002C8.54005 4.32002 7.83005 3.90002 7.06005 3.90002H6.41005C5.52005 3.90002 4.33005 4.39002 3.70005 5.01002C3.12005 5.59002 2.80005 6.35002 2.80005 7.17002C2.80005 9.56002 3.61005 11.93 5.19005 14.21C5.70005 14.94 6.31005 15.66 7.13005 16.48L7.46005 16.81C8.28005 17.63 9.00005 18.25 9.74005 18.76ZM8.32005 15.97L7.99005 15.64C7.22005 14.87 6.65005 14.21 6.18005 13.53C4.74005 11.45 4.01005 9.31002 4.01005 7.17002C4.01005 6.68002 4.20005 6.21002 4.56005 5.86002C4.97005 5.45002 5.83005 5.09002 6.41005 5.09002H7.05005C7.38005 5.09002 7.69005 5.28002 7.85005 5.57002L9.59005 8.81002C9.71005 9.04002 9.72005 9.32002 9.60005 9.55002L9.36005 10.08C9.30005 10.2 9.22005 10.31 9.13005 10.4L8.69005 10.84C8.32005 11.21 8.23005 11.76 8.45005 12.22C8.68005 12.7 9.11005 13.42 9.83005 14.14C10.55 14.86 11.27 15.29 11.75 15.52C12.21 15.74 12.77 15.65 13.13 15.28L13.57 14.84C13.66 14.75 13.77 14.67 13.89 14.61L14.41 14.35C14.65 14.23 14.92 14.24 15.15 14.36L18.4 16.11C18.69 16.26 18.8701 16.57 18.8701 16.9V17.55C18.8701 18.13 18.51 18.99 18.1 19.4C17.75 19.75 17.2901 19.94 16.7901 19.94C14.64 19.94 12.5 19.21 10.43 17.77C9.75005 17.31 9.08005 16.73 8.32005 15.97Z" fill={fillColor} />
          </svg>
        );
        break;
      case 'videoMute':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3891 3.11092C20.6234 3.34523 20.6234 3.72513 20.3891 3.95944L17.9287 6.41983V8.19348L19.3598 6.96399C20.3973 6.0726 22.0025 6.80974 22.0025 8.17759V15.8225C22.0025 17.1903 20.3973 17.9274 19.3598 17.0361L17.9287 15.8066V16.9996C17.9287 18.6565 16.5856 19.9996 14.9287 19.9996H4.34896L2.92429 21.4243C2.68997 21.6586 2.31007 21.6586 2.07576 21.4243C1.84145 21.19 1.84145 20.8101 2.07576 20.5758L19.5406 3.11092C19.7749 2.8766 20.1548 2.8766 20.3891 3.11092ZM5.54897 18.7996H14.9287C15.9229 18.7996 16.7287 17.9937 16.7287 16.9996V14.5C16.7287 14.2656 16.8653 14.0526 17.0784 13.9548C17.2914 13.8569 17.5419 13.8921 17.7198 14.0449L20.1418 16.1259C20.4012 16.3487 20.8025 16.1644 20.8025 15.8225V8.17759C20.8025 7.83563 20.4012 7.65134 20.1418 7.87419L17.7198 9.95512C17.5419 10.1079 17.2914 10.1431 17.0784 10.0453C16.8653 9.94744 16.7287 9.73447 16.7287 9.50002V7.61983L5.54897 18.7996ZM4.99768 5.20037C4.00357 5.20037 3.19768 6.00625 3.19768 7.00037V17C3.19768 17.3314 2.92905 17.6 2.59768 17.6C2.26631 17.6 1.99768 17.3314 1.99768 17V7.00037C1.99768 5.34351 3.34083 4.00037 4.99768 4.00037H15C15.3314 4.00037 15.6 4.269 15.6 4.60037C15.6 4.93174 15.3314 5.20037 15 5.20037H4.99768Z" fill={fillColor} />
          </svg>
        );
        break;
      case 'iconCall':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.147 7C16.2626 7 16.3729 7.02302 16.4735 7.06473C16.5741 7.10636 16.6684 7.16806 16.7501 7.24985C16.8319 7.33164 16.8936 7.4259 16.9353 7.52651C16.977 7.62709 17 7.73738 17 7.85304V13.131C17 13.6021 16.6181 13.984 16.147 13.984C15.6758 13.984 15.2939 13.6021 15.2939 13.131V9.91248L8.45624 16.7501C8.1231 17.0833 7.58299 17.0833 7.24985 16.7501C6.91672 16.417 6.91672 15.8769 7.24985 15.5438L14.0875 8.70609H10.869C10.3979 8.70609 10.016 8.32417 10.016 7.85304C10.016 7.38192 10.3979 7 10.869 7H16.147Z" fill={fillColor} />
          </svg>
        );
        break;
      case 'iconTic':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.01005 17.01L4.75 12.75C4.33579 12.3358 4.33579 11.6642 4.75 11.25C5.16421 10.8358 5.83579 10.8358 6.25 11.25L9.57574 14.5757C9.81005 14.8101 10.1899 14.8101 10.4243 14.5757L17.75 7.25C18.1642 6.83579 18.8358 6.83579 19.25 7.25C19.6642 7.66421 19.6642 8.33579 19.25 8.75L10.9899 17.0101C10.4432 17.5568 9.55678 17.5568 9.01005 17.01Z" fill={fillColor} />          </svg>
        );
        break;
      case 'reply':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60002 9.50002C4.60002 7.92014 5.84254 6.60002 7.50002 6.60002C9.02929 6.60002 10.227 7.80001 10.403 9.55973C10.8744 14.2739 8.16163 17.2656 5.00026 17.8084C4.89983 17.8248 4.80998 17.7947 4.73539 17.7248C4.65611 17.6505 4.60002 17.5338 4.60002 17.4V16.7C4.60002 16.6451 4.62345 16.562 4.68084 16.4791C4.70779 16.4401 4.73635 16.4101 4.76078 16.39C4.77874 16.3753 4.78976 16.3697 4.79191 16.3686L4.79218 16.3684C4.80251 16.3649 4.81274 16.3612 4.82286 16.3571C5.33675 16.1516 6.12415 15.802 6.79133 15.2877C7.44903 14.7807 8.10002 14.0258 8.10002 13C8.10002 12.6687 7.8314 12.4 7.50002 12.4C5.84254 12.4 4.60002 11.0799 4.60002 9.50002ZM7.50002 5.40002C5.15751 5.40002 3.40002 7.27991 3.40002 9.50002C3.40002 11.4824 4.80128 13.1935 6.76909 13.5373C6.63238 13.8144 6.3913 14.081 6.05872 14.3373C5.53069 14.7443 4.87522 15.0431 4.39036 15.2377C4.09314 15.3428 3.85419 15.5649 3.69421 15.796C3.5266 16.0381 3.40002 16.355 3.40002 16.7V17.4C3.40002 18.3072 4.17284 19.1628 5.19866 18.9919L5.2014 18.9914C9.03934 18.3335 12.1256 14.7254 11.597 9.44032C11.373 7.20004 9.77076 5.40002 7.50002 5.40002ZM14.6 9.50002C14.6 7.92014 15.8425 6.60002 17.5 6.60002C19.0293 6.60002 20.227 7.80001 20.403 9.55973C20.8744 14.2739 18.1616 17.2656 15.0003 17.8084C14.8998 17.8248 14.81 17.7947 14.7354 17.7248C14.6561 17.6505 14.6 17.5338 14.6 17.4V16.7C14.6 16.6451 14.6234 16.562 14.6808 16.4791C14.7078 16.4401 14.7364 16.4101 14.7608 16.39C14.7797 16.3745 14.7909 16.3691 14.7922 16.3684C14.8025 16.3649 14.8127 16.3612 14.8229 16.3571C15.3367 16.1516 16.1242 15.802 16.7913 15.2877C17.449 14.7807 18.1 14.0258 18.1 13C18.1 12.6687 17.8314 12.4 17.5 12.4C15.8425 12.4 14.6 11.0799 14.6 9.50002ZM17.5 5.40002C15.1575 5.40002 13.4 7.27991 13.4 9.50002C13.4 11.4824 14.8013 13.1935 16.7691 13.5373C16.6324 13.8144 16.3913 14.081 16.0587 14.3373C15.5307 14.7443 14.8752 15.0431 14.3904 15.2377C14.0931 15.3428 13.8542 15.5649 13.6942 15.796C13.5266 16.0381 13.4 16.355 13.4 16.7V17.4C13.4 18.3072 14.1728 19.1628 15.1987 18.9919L15.2014 18.9914C19.0393 18.3335 22.1256 14.7254 21.597 9.44032C21.373 7.20004 19.7708 5.40002 17.5 5.40002Z" fill={fillColor} />
          </svg>
        );
        break;
      case 'delete':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.91003 3.56002C8.91003 2.617 9.71123 1.90002 10.64 1.90002H13.36C14.2715 1.90002 15.09 2.6001 15.09 3.56002V4.40002H19.5C19.8314 4.40002 20.1 4.66865 20.1 5.00002C20.1 5.3314 19.8314 5.60002 19.5 5.60002H4.50002C4.16865 5.60002 3.90002 5.3314 3.90002 5.00002C3.90002 4.66865 4.16865 4.40002 4.50002 4.40002H8.91003V3.56002ZM13.89 3.56002V4.40002H10.11V3.56002C10.11 3.34305 10.3088 3.10002 10.64 3.10002H13.36C13.6886 3.10002 13.89 3.33995 13.89 3.56002ZM6.53857 7.95794C6.51532 7.62739 6.2285 7.37827 5.89795 7.40153C5.56739 7.42478 5.31828 7.7116 5.34153 8.04215L6.13014 19.2523C6.1421 20.8367 7.42952 22.1 9.01005 22.1H14.9201C16.5022 22.1 17.7879 20.8252 17.8 19.2523L18.5886 8.04215C18.6118 7.7116 18.3627 7.42478 18.0322 7.40153C17.7016 7.37827 17.4148 7.62739 17.3915 7.95795L16.6015 19.1879C16.6005 19.202 16.6001 19.216 16.6001 19.23C16.6001 20.147 15.8504 20.9 14.9201 20.9H9.01005C8.07798 20.9 7.33005 20.1552 7.33005 19.23C7.33005 19.216 7.32956 19.202 7.32857 19.1879L6.53857 7.95794Z" fill="#141415" />
          </svg>
        );
        break;
      case 'video1':
        iconSvg = (
          <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.99768 5.20037C4.00357 5.20037 3.19768 6.00625 3.19768 7.00036V16.9996C3.19768 17.9937 4.00357 18.7996 4.99768 18.7996H14.9288C15.9229 18.7996 16.7288 17.9937 16.7288 16.9996V14.5C16.7288 14.2656 16.8653 14.0526 17.0784 13.9548C17.2914 13.8569 17.5419 13.8921 17.7198 14.0449L20.1418 16.1259C20.4012 16.3487 20.8025 16.1644 20.8025 15.8225V8.17759C20.8025 7.83563 20.4012 7.65134 20.1418 7.87419L17.7198 9.95512C17.5419 10.1079 17.2914 10.1431 17.0784 10.0453C16.8653 9.94744 16.7288 9.73447 16.7288 9.50002V7.00037C16.7288 6.00625 15.9229 5.20037 14.9288 5.20037H4.99768ZM1.99768 7.00036C1.99768 5.34351 3.34083 4.00037 4.99768 4.00037H14.9288C16.5856 4.00037 17.9288 5.34351 17.9288 7.00037V8.19348L19.3598 6.964C20.3973 6.07261 22.0025 6.80975 22.0025 8.17759V15.8225C22.0025 17.1903 20.3973 17.9274 19.3598 17.0361L17.9288 15.8066V16.9996C17.9288 18.6565 16.5856 19.9996 14.9288 19.9996H4.99768C3.34083 19.9996 1.99768 18.6565 1.99768 16.9996V7.00036Z" fill="#141415" />
          </svg>
        );
        break;
      case 'contact':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56252 3.05625C3.8939 3.05625 4.16252 3.32488 4.16252 3.65625V6.25C4.16252 6.58137 3.8939 6.85 3.56252 6.85C3.23115 6.85 2.96252 6.58137 2.96252 6.25V3.65625C2.96252 3.32488 3.23115 3.05625 3.56252 3.05625Z" fill={fillColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56252 17.1812C3.8939 17.1812 4.16252 17.4499 4.16252 17.7812V20.375C4.16252 20.7064 3.8939 20.975 3.56252 20.975C3.23115 20.975 2.96252 20.7064 2.96252 20.375V17.7812C2.96252 17.4499 3.23115 17.1812 3.56252 17.1812Z" fill={fillColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56252 8.025C3.8939 8.025 4.16252 8.29363 4.16252 8.625V15.4688C4.16252 15.8001 3.8939 16.0687 3.56252 16.0687C3.23115 16.0687 2.96252 15.8001 2.96252 15.4688V8.625C2.96252 8.29363 3.23115 8.025 3.56252 8.025Z" fill={fillColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.56252 3C6.14248 2.99996 5.93245 2.99993 5.77201 3.08166C5.63089 3.15356 5.51615 3.26829 5.44424 3.4094C5.36249 3.56983 5.36249 3.77986 5.36249 4.19991V19.8001C5.36249 20.2201 5.36249 20.4301 5.44423 20.5905C5.51613 20.7316 5.63085 20.8464 5.77196 20.9183C5.93238 21 6.14238 21 6.56239 21H15.9998C17.3998 21 18.0998 21 18.6345 20.7275C19.1049 20.4879 19.4873 20.1055 19.727 19.6351C19.9994 19.1004 19.9994 18.4003 19.9994 17.0003V7.00069C19.9994 5.60082 19.9994 4.90087 19.727 4.36617C19.4874 3.89583 19.105 3.51341 18.6347 3.27373C18.1 3.00125 17.4001 3.00117 16.0002 3.00101L6.56252 3ZM6.56241 4C6.48501 3.99999 6.42007 4 6.36293 4.00042C6.3625 4.05756 6.36249 4.1225 6.36249 4.19991V19.8001C6.36249 19.8775 6.3625 19.9424 6.36293 19.9996C6.42006 20 6.485 20 6.56239 20H15.9998C16.7163 20 17.1935 19.9992 17.5602 19.9693C17.9152 19.9403 18.0776 19.889 18.1805 19.8365C18.4627 19.6927 18.6922 19.4633 18.836 19.1811C18.8884 19.0782 18.9397 18.9158 18.9687 18.5608C18.9987 18.1941 18.9994 17.7168 18.9994 17.0003V7.00069C18.9994 6.28425 18.9987 5.80706 18.9687 5.44042C18.9397 5.08545 18.8884 4.92302 18.836 4.82013C18.6922 4.53794 18.4628 4.3085 18.1806 4.1647C18.0777 4.11226 17.9153 4.06096 17.5604 4.03192C17.1937 4.00192 16.7165 4.00109 16.0001 4.00101L6.56241 4Z" fill={fillColor} />
            <path d="M14.6852 9.33295C14.6852 8.16647 14.1081 7 12.6687 7C11.2292 7 10.6522 8.16647 10.6522 9.33295C10.6522 11.0827 11.5146 11.9637 12.6687 11.9637C13.8227 11.9637 14.6852 11.0889 14.6852 9.33295Z" fill={fillColor} />
            <path d="M9.5338 14.2164L9.3655 14.351C8.77758 14.8214 8.37433 15.4839 8.22667 16.2222C8.1462 16.6246 8.45396 17 8.86429 17H16.4976C16.908 17 17.2157 16.6246 17.1353 16.2222C16.9876 15.4839 16.5844 14.8214 15.9964 14.351L15.8281 14.2164C15.2776 13.7759 14.6151 13.4977 13.9151 13.413L13.3689 13.3469C12.912 13.2916 12.45 13.2916 11.993 13.3469L11.4468 13.413C10.7469 13.4977 10.0844 13.7759 9.5338 14.2164Z" fill={fillColor} />
          </svg>
        );
        break;
      case 'Sticker':
        iconSvg = (
          <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.6656 6.91554C6.41797 4.37861 9.81531 3 16 3C22.1792 3 25.5787 4.34629 27.333 6.86905C28.1948 8.10832 28.6029 9.55769 28.8025 11.0922C29 12.6101 29 14.2746 29 15.9682V16C29 17.7122 28.9822 19.3885 28.7584 20.92C28.5336 22.4576 28.0944 23.9035 27.2145 25.1383C25.4251 27.6494 22.0374 29 16 29C9.9571 29 6.57151 27.6171 4.78404 25.0918C3.90558 23.8507 3.46652 22.4023 3.24171 20.8704C3.01777 19.3443 3 17.6829 3 16L3 15.9688V15.9688C2.99999 14.3042 2.99999 12.6543 3.19752 11.1418C3.39721 9.61287 3.80522 8.16114 4.6656 6.91554ZM4.73998 11.3433C4.55681 12.7458 4.55556 14.3001 4.55556 16C4.55556 17.6922 4.57556 19.2461 4.78078 20.6445C4.98513 22.037 5.36663 23.2224 6.05372 24.1931C7.39735 26.0913 10.1229 27.4444 16 27.4444C21.8826 27.4444 24.6061 26.1183 25.9477 24.2355C26.6334 23.2733 27.0148 22.093 27.2192 20.695C27.4244 19.2909 27.4444 17.7222 27.4444 16C27.4444 14.2702 27.4432 12.7011 27.26 11.2929C27.0777 9.89173 26.7219 8.71484 26.0559 7.75716C24.7547 5.88599 22.043 4.55555 16 4.55555C9.96247 4.55555 7.24869 5.91298 5.94551 7.79963C5.27812 8.76582 4.92224 9.94775 4.73998 11.3433ZM17.0776 21.1744L17.2059 21.527C17.5312 22.4208 18.5195 22.8816 19.4133 22.5563C20.3071 22.231 20.7679 21.2427 20.4426 20.3489L20.3867 20.1954C19.4347 20.7382 18.3254 21.0598 17.0776 21.1744ZM15.4349 21.2095L15.7442 22.059C16.3633 23.7601 18.2442 24.6372 19.9453 24.0181C21.6464 23.3989 22.5235 21.518 21.9044 19.8169L21.6873 19.2206C21.8489 19.0641 22.0036 18.8981 22.1511 18.7225C22.4274 18.3936 22.3847 17.903 22.0558 17.6267C21.7269 17.3504 21.2363 17.393 20.96 17.7219C19.9017 18.9818 18.2967 19.6667 16 19.6667C13.7033 19.6667 12.0983 18.9818 11.04 17.7219C10.7637 17.393 10.2731 17.3504 9.94417 17.6267C9.61526 17.903 9.57261 18.3936 9.84891 18.7225C11.1753 20.3015 13.0759 21.1012 15.4349 21.2095ZM21.2778 14.8889C22.0448 14.8889 22.6667 13.894 22.6667 12.6667C22.6667 11.4394 22.0448 10.4444 21.2778 10.4444C20.5107 10.4444 19.8889 11.4394 19.8889 12.6667C19.8889 13.894 20.5107 14.8889 21.2778 14.8889ZM12.1111 12.6667C12.1111 13.894 11.4893 14.8889 10.7222 14.8889C9.95516 14.8889 9.33333 13.894 9.33333 12.6667C9.33333 11.4394 9.95516 10.4444 10.7222 10.4444C11.4893 10.4444 12.1111 11.4394 12.1111 12.6667Z" fill="#141415" />
          </svg>

        );
        break;
      case 'like':
        iconSvg = (
          <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" /></svg>
          </svg>
        );
        break;
      default:
        iconSvg = null;

    }

    return iconSvg && (
      <div style={{ width: size, height: size }}>
        {React.cloneElement(iconSvg, { fill: fillColor })}
      </div>
    );
  }
}

export default Icons;
