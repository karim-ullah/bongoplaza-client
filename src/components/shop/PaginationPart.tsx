"use client";
import { Table,Pagination } from "@heroui/react";
import Link from "next/link";



const PaginationPart = ({data}: {data: any}) => {
  const page = data.page
  const pages = []
  const totalPages = data.totalPage

  for(let i = 1 ; i<= totalPages; i++){
    pages.push(i)
  }
  // console.log(pages);
  return (
    <div>
      <Table.Footer>
        <Pagination size="sm">
          
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={page === 1}
                
              >
                <Link className="flex items-center gap-2" href={`/shop?page=${page - 1}`}>
                <Pagination.PreviousIcon />
                Prev
                </Link>
              </Pagination.Previous>
            </Pagination.Item>
            {pages.map((p) => (
              <Pagination.Item key={p}>

                <Link href={`/shop?page=${p}`}>
                <Pagination.Link isActive={p === page}
                //  onPress={() => setPage(p)}
                 >
                  {p}
                </Pagination.Link>
                </Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                isDisabled={page === totalPages}

              >
                <Link className="flex items-center gap-2" href={`/find-doctors?page=${Number(page) + 1}`}>
                Next
                <Pagination.NextIcon />
                </Link>
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
    </div>
  );
};

export default PaginationPart;
