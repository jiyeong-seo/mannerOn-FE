interface IconProps {
    isClicked: boolean;
    onClick: () => void;
  }

export default function DislikeIcon({isClicked, onClick}: IconProps){
    return(
        isClicked ?(<svg onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.1126 15.5968C10.8868 16.0486 10.425 16.334 9.91995 16.334H9.119C8.29508 16.334 7.66836 15.5942 7.80381 14.7815L8.21172 12.334L4.61716 12.334C3.69188 12.334 3.0479 11.4146 3.36411 10.545L5.54592 4.54499C5.73753 4.01807 6.23831 3.66732 6.79898 3.66732L11.6666 3.66732L11.6653 14.4909L11.1126 15.5968ZM12.9989 12.334H14.9987C15.7351 12.334 16.332 11.737 16.332 11.0007V5.00019C16.332 4.26381 15.7351 3.66686 14.9987 3.66686H12.9999L12.9989 12.334Z" fill="black"/>
        </svg>) :
        (<svg onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6068 11.666H15.6654C16.0336 11.666 16.332 11.3675 16.332 10.9993V4.99889C16.332 4.6307 16.0336 4.33222 15.6654 4.33222H12.6068" stroke="#828382" strokeWidth="1.33333"/>
            <path d="M7.46695 4.33268H13L12.9993 11.4902C12.9993 11.6058 12.9724 11.7199 12.9207 11.8233L11.1842 15.2974C11.0713 15.5233 10.8405 15.666 10.5879 15.666H9.78697C9.37501 15.666 9.06165 15.2961 9.12938 14.8897L9.53729 12.4423C9.60501 12.0359 9.29165 11.666 8.87969 11.666H5.28513C4.82249 11.666 4.5005 11.2063 4.6586 10.7715L6.84042 4.77152C6.93623 4.50806 7.18661 4.33268 7.46695 4.33268Z" stroke="#828382" strokeWidth="1.33333"/>
            </svg>)
        
    )
}


