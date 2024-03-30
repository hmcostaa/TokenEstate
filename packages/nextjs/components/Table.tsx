import Image from "next/image";
import Link from "next/link";
import historicGem from "~~/public/Lisbon/old_lisbon.png";
import artDeco from "~~/public/bucharest.png";

const Table = () => {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="table">
        {/* head */}
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th>Property</th>
            <th>Certificate</th>
            <th>ROI</th>
            <th>Price</th>
            <th className="text-center">Num of Tokens</th>
            <th>Monthly Dividend</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-20 h-20">
                    <Image src={historicGem} alt="Historic Gem" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Historic Gem</div>
                  <div className="text-sm opacity-50">Lisbon, Portugal</div>
                </div>
              </div>
            </td>
            <td>
              File
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>$10,000</td>
            <td className="text-center">8</td>
            <td>$1,250</td>
            <th>
            <Link href={`/property/${1}`} className="btn btn-secondary">View Details</Link>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-20 h-20">
                  <Image src={artDeco} alt="Art Deco" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Art Deco</div>
                  <div className="text-sm opacity-50">Bucharest, Romania</div>
                </div>
              </div>
            </td>
            <td>
              File
            </td>
            <td>
              Carroll Group
              <br />
              <span className="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>$125,000</td>
            <td className="text-center">3</td>
            <td>$12,500</td>
            <th>
            <Link href={`/property/${2}`} className="btn btn-secondary">View Details</Link>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Property</th>
            <th>Certificate</th>
            <th>ROI</th>
            <th>Price</th>
            <th className="text-center">Num of Tokens</th>
            <th>Monthly Dividend</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
