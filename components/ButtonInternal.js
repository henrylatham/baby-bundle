import { useRouter } from 'next/navigation';

export default function Button({ text, className, targetPage }) {
  const router = useRouter();

  const handleClick = () => {
    if (targetPage) {
      router.push(targetPage);
    }
  };

  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
}
