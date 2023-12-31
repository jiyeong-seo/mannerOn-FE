import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as S from './styled';
import { Modal } from '@UI/atoms';
import CopyIcon from '@assets/icon/copyIcon';
import LikeIcon from '@assets/icon/likeIcon';
import DislikeIcon from '@assets/icon/dislikeIcon';
import { usePutCopyMessageMutation } from '@apis/copy/copyQuery';
import { usePutFeedbackMutation } from '@apis/feedback/feedbackQuery';
import { IconRes } from 'types/feedback';
import { BusinessErrorResponse, HTTPResponse } from 'types/common';

export interface ChatIconProps {
  text?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  currentChatId?: number;
}

const ChatIcons: React.FC<ChatIconProps> = ({ text, onChange, currentChatId }) => {
  const [copyClicked, setcopyClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [likeIconClicked, setLikeIconClicked] = useState(false);
  const [dislikeIconClicked, setDislikeIconClicked] = useState(false);

  const { mutate: putCopyMessage } = usePutCopyMessageMutation({});

  const { mutate: putFeedback } = usePutFeedbackMutation(currentChatId ?? 0);

  let textString: string | undefined;
  if (typeof text === 'string') {
    textString = text;
  } else if (React.isValidElement(text)) {
    textString = ReactDOMServer.renderToStaticMarkup(text);
  } else {
    textString = undefined;
  }

  const handleClick = () => {
    setcopyClicked(!copyClicked);
    if (!copyClicked) {
      showModal();
      putCopyMessage({ chatId: currentChatId as number });
    } else {
      console.error('currentChatId is undefined');
    }
  };

  const handleLikeIconClick = () => {
    setLikeIconClicked(!likeIconClicked);
    setDislikeIconClicked(false);
    if (!likeIconClicked) {
      putFeedback({ feedback: 1 });
    } else if (likeIconClicked) {
      putFeedback({ feedback: -1 });
    }
  };

  const handleDislikeIconClick = () => {
    setDislikeIconClicked(!dislikeIconClicked);
    setLikeIconClicked(false);
    if (!dislikeIconClicked) {
      putFeedback({ feedback: -1 });
    } else if (dislikeIconClicked) {
      putFeedback({ feedback: 1 });
    }
  };

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <S.ChatIcons onChange={onChange}>
      <S.StyledCopyIcon>
        <CopyToClipboard text={textString || ''} onCopy={handleClick}>
          <div>
            <CopyIcon isClicked={copyClicked} />
          </div>
        </CopyToClipboard>
        {modalOpen && <Modal type={'copy'} modalText={'메세지를 복사했어요.'} setModalOpen={setModalOpen} />}
      </S.StyledCopyIcon>
      <S.StyledLikeIcon>
        <LikeIcon isClicked={likeIconClicked} onClick={handleLikeIconClick} />
      </S.StyledLikeIcon>
      <S.StyledDislikeIcon>
        <DislikeIcon isClicked={dislikeIconClicked} onClick={handleDislikeIconClick} />
      </S.StyledDislikeIcon>
    </S.ChatIcons>
  );
};

export default ChatIcons;
