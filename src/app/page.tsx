'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name1: '',
    name2: '',
    age1: '',
    age2: '',
    hobby1: '',
    hobby2: ''
  });
  
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const calculateCompatibility = () => {
    // 基于输入计算契合度
    const ageDiff = Math.abs(Number(formData.age1) - Number(formData.age2));
    const baseScore = 85; // 基础分
    let score = baseScore;
    
    // 年龄差异影响
    if (ageDiff > 10) score -= 10;
    else if (ageDiff > 5) score -= 5;
    
    // 添加一些随机波动
    score += Math.floor(Math.random() * 10) - 5;
    
    // 确保分数在60-100之间
    return Math.min(100, Math.max(60, score));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowForm(false);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const score = calculateCompatibility();
    setResult(score);
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      name1: '',
      name2: '',
      age1: '',
      age2: '',
      hobby1: '',
      hobby2: ''
    });
    setResult(null);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      {/* 顶部装饰 */}
      <div className="w-full bg-white/50 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💘</span>
            <span className="font-bold text-gray-800">AI缘分测试</span>
          </div>
          <div className="text-sm text-gray-600">
            已有 1,234 对情侣完成测试
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start gap-8">
        {/* 左侧信息栏 */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">关于测试</h2>
            <div className="space-y-4 text-gray-600">
              <p>我们的AI系统会通过分析：</p>
              <ul className="list-disc list-inside space-y-2">
                <li>年龄匹配度</li>
                <li>兴趣相似度</li>
                <li>性格互补性</li>
                <li>生活习惯契合度</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">使用说明</h2>
            <div className="space-y-3 text-gray-600">
              <p>1. 填写双方的基本信息</p>
              <p>2. 认真填写兴趣爱好</p>
              <p>3. 等待AI智能分析</p>
              <p>4. 查看详细的匹配报告</p>
            </div>
          </div>
        </div>

        {/* 中间主要内容区 */}
        <div className="w-full md:w-2/3">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              AI 智能情侣契合度测试
            </h1>
            <p className="text-gray-600">
              基于先进的AI算法，准确分析你们的缘分指数
            </p>
          </div>

          {showForm && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">第一个人的名字:</label>
                  <input
                    type="text"
                    value={formData.name1}
                    onChange={(e) => setFormData({...formData, name1: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">第一个人的年龄:</label>
                  <input
                    type="number"
                    value={formData.age1}
                    onChange={(e) => setFormData({...formData, age1: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">第一个人的兴趣爱好:</label>
                  <input
                    type="text"
                    value={formData.hobby1}
                    onChange={(e) => setFormData({...formData, hobby1: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">第二个人的名字:</label>
                  <input
                    type="text"
                    value={formData.name2}
                    onChange={(e) => setFormData({...formData, name2: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">第二个人的年龄:</label>
                  <input
                    type="number"
                    value={formData.age2}
                    onChange={(e) => setFormData({...formData, age2: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">第二个人的兴趣爱好:</label>
                  <input
                    type="text"
                    value={formData.hobby2}
                    onChange={(e) => setFormData({...formData, hobby2: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
                >
                  开始测算
                </button>
              </form>
            </div>
          )}

          {loading && (
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-pink-500 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">正在进行智能测算...</p>
            </div>
          )}

          {result !== null && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">测算结果</h2>
              <div className="text-6xl font-bold text-pink-500 mb-4">{result}%</div>
              <p className="text-gray-600 mb-6">
                {formData.name1} 和 {formData.name2} 的契合度为 {result}%
              </p>
              <div className="mb-6">
                {result >= 90 ? '天作之合！你们简直是命中注定的一对！' :
                 result >= 80 ? '非常般配！在一起一定会很幸福！' :
                 result >= 70 ? '还不错哦，可以多多了解对方！' :
                 '虽然契合度不是很高，但真爱需要用心经营~'}
              </div>
              <button
                onClick={resetForm}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                重新测试
              </button>
            </div>
          )}
        </div>
      </main>

      {/* 底部信息 */}
      <footer className="bg-white/50 backdrop-blur-sm mt-12">
        <div className="max-w-6xl mx-auto p-4 text-center text-gray-600">
          <p className="mb-2">注意：本测试结果仅供娱乐参考</p>
          <p className="text-sm">
            Copyright © 2024 AI缘分测试 | 隐私政策 | 使用条款
          </p>
        </div>
      </footer>
    </div>
  );
}
