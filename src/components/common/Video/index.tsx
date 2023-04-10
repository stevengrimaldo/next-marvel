'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Track, { Props as TrackProps } from './Track';

const VideoEl = styled.video``;

export interface Props {
  aspectRatio?: string;
  files: string[];
  height?: string;
  hideControls?: boolean;
  onEnd?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  poster?: string;
  tracks?: TrackProps[];
  width?: string;
}

const Video = ({
  aspectRatio,
  files,
  height = '100%',
  hideControls = false,
  onEnd,
  onPause,
  onPlay,
  tracks,
  width = '100%',
  ...props
}: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  // see here for more events:
  // https://mzl.la/3IMDWmQ
  useEffect(() => {
    if (ref?.current) {
      if (onEnd) {
        ref.current.onended = onEnd;
      }
      if (onPause) {
        ref.current.onpause = onPause;
      }
      if (onPlay) {
        ref.current.onplay = onPlay;
      }
    }
  }, [onEnd, onPause, onPlay, ref]);

  return (
    <VideoEl
      {...props}
      controls={!hideControls}
      height={height}
      style={{ aspectRatio: aspectRatio }}
      width={width}
    >
      {files.map((file, i) => (
        <source key={i} src={file} type={`video/${file.split('.').pop()}`} />
      ))}
      {/* tracks are for making captions available for accessability */}
      {tracks?.map((track, i) => (
        <Track {...track} key={i} />
      ))}
    </VideoEl>
  );
};

export default Video;
