export interface Props {
  isDefault?: boolean;
  kind?:
    | 'subtitles'
    | 'captions'
    | 'descriptions'
    | 'chapters'
    | 'descriptions'
    | 'chapters'
    | 'metadata';
  label: string;
  src: string;
  srclang: 'en';
}

const Track = ({
  isDefault = false,
  kind = 'subtitles',
  src,
  srclang,
}: Props) => (
  <track default={isDefault} kind={kind} src={src} srcLang={srclang} />
);

export default Track;
