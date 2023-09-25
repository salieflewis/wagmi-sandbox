import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { wagmigotchiAbi } from '../../abi';

export function Example() {
  const { config, error } = usePrepareContractWrite({
    address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    abi: wagmigotchiAbi,
    functionName: 'feed',
    enabled: false,
  });
  const { write } = useContractWrite(config);

  console.log('Config object:', config);

  console.log('Config mode:', config.mode);

  console.log('Defined write function:', write);

  return (
    <>
      <button
        className='px-2 border border-gray-500 rounded hover:bg-gray-100'
        type='button'
        disabled={!write}
        onClick={() => write?.()}
      >
        Feed
      </button>
      {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>
      )}
    </>
  );
}
