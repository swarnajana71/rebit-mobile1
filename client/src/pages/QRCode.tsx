import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, QrCode } from 'lucide-react';

export const QRCode = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 flex items-center gap-3">
        <Link href="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={20} className="text-gray-600" />
        </Link>
        <h1 className="text-lg font-bold text-gray-900">QRコード</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full">
          {/* QR Code Display Area */}
          <div className="bg-gray-100 rounded-lg p-8 mb-6 flex items-center justify-center">
            <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
              <QrCode size={120} className="text-gray-400" />
            </div>
          </div>

          {/* User Info */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Hirota さん</h2>
            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-sm text-gray-600">会員ランク</span>
              <span className="text-sm font-semibold text-yellow-800">Seed</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">このQRコードを読み取って</p>
            <p>ポイントを送受信できます</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            QRコードを保存
          </button>
          <button className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
            共有
          </button>
        </div>
      </div>
    </div>
  );
};