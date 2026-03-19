type SerachPage = {
  searchParams: Promise<{ query: string }>;
};

async function SearchPage({ searchParams }: SerachPage) {
  const { query } = await searchParams;

  return (
    <div className="container mx-auto mt-28">
      this is search page, query is: {query}
    </div>
  );
}

export default SearchPage;
