import { withData } from './HOC';

interface props {
  username: string;
}

export const withGists = withData(
  (props: props) => `https://api.github.com/users/${props.username}/gists`
);
