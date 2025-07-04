import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Member {
  id: number;
  email: string;
  registrationMethod: string;
  createdAt: string;
  updatedAt: string;
}

export const Admin = (): JSX.Element => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [dataSource, setDataSource] = useState<"local" | "external">("local");

  const { data: membersData, isLoading, error } = useQuery({
    queryKey: ["/api/admin/members", dataSource],
    queryFn: async () => {
      const baseUrl = dataSource === "external" 
        ? "http://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev"
        : "";
      
      try {
        const response = await fetch(`${baseUrl}/api/admin/members`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
      } catch (error: unknown) {
        console.error("API fetch error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to fetch members: ${errorMessage}`);
      }
    },
  });

  const members = membersData?.data || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading members...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600">Error loading members: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Member Administration</h1>
                <p className="mt-2 text-gray-600">
                  Total members: {members.length} • Source: {dataSource === "external" ? "External API" : "Local Storage"}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Data Source:</label>
                <select
                  value={dataSource}
                  onChange={(e) => setDataSource(e.target.value as "local" | "external")}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="local">Local Test Data</option>
                  <option value="external">External Admin API</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Members List */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Registered Members</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {members.length === 0 ? (
                  <div className="px-6 py-8 text-center text-gray-500">
                    No members registered yet
                  </div>
                ) : (
                  members.map((member: Member) => (
                    <div
                      key={member.id}
                      className={`px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedMember?.id === member.id ? "bg-blue-50" : ""
                      }`}
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {member.email}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {member.id} • Method: {member.registrationMethod}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(member.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Member Details */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Member Details</h2>
              </div>
              <div className="px-6 py-4">
                {selectedMember ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ID</label>
                      <div className="mt-1 text-sm text-gray-900">{selectedMember.id}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <div className="mt-1 text-sm text-gray-900">{selectedMember.email}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Registration Method</label>
                      <div className="mt-1 text-sm text-gray-900">{selectedMember.registrationMethod}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Created At</label>
                      <div className="mt-1 text-sm text-gray-900">
                        {new Date(selectedMember.createdAt).toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Updated</label>
                      <div className="mt-1 text-sm text-gray-900">
                        {new Date(selectedMember.updatedAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-500 text-center py-8">
                    Select a member to view details
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quick Stats</h2>
              </div>
              <div className="px-6 py-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Members:</span>
                  <span className="text-sm font-medium text-gray-900">{members.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Email Registrations:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {members.filter((m: Member) => m.registrationMethod === "email").length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Today:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {members.filter((m: Member) => 
                      new Date(m.createdAt).toDateString() === new Date().toDateString()
                    ).length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};