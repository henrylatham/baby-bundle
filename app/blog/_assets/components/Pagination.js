import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className="flex justify-center items-center space-x-4 my-8">
      {currentPage > 1 && (
        <Link href={`/blog?page=${currentPage - 1}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Previous
        </Link>
      )}
      <span className="text-lg font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link href={`/blog?page=${currentPage + 1}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Next
        </Link>
      )}
    </div>
  );
}